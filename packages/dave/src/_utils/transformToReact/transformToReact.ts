import {z} from 'zod'
import { transformToHast } from '@utils/transformToHast/transformToHast'
import { Element, ElementContent } from 'hast'
import { ConfigObject } from 'src'
import { upperFirst, lowerCase, camelCase } from 'lodash'


const zTransformReactOptions = z.object({
  includeReactImport: z.boolean().optional(),
  useDefaultExport: z.boolean().optional(),
  usesTypeScript: z.boolean().optional(),
})

export type TransformReactOptions = z.infer<typeof zTransformReactOptions>

const defaultTransformReactOptions: TransformReactOptions = {
  includeReactImport: true,
  useDefaultExport: false,
  usesTypeScript: true,
}

const collectProps = (configObject: ConfigObject) => {
  const props = []
  const componentProps = configObject.componentProps

  if (componentProps) {
    for (const key in componentProps) {
      props.push(`${key}: ${componentProps[key]}`)
    }
  }

  return props


}

export const transformToReact = (configObject: ConfigObject, options = defaultTransformReactOptions) => {
  const componentName = upperFirst(lowerCase(camelCase(configObject.name)))
  const hast = transformToHast(configObject)
  const useCVA = configObject.style?.variants || configObject.style?.baseStyles
  const hasChildren = configObject.children?.length
  const cvaName = `${componentName}CVA`
  const props = collectProps(configObject)


  let types = ``

  if (options.usesTypeScript) {
    types = `export interface ${componentName}Props extends React.HTMLAttributes<HTML${upperFirst(configObject.tagName)}Element>`

    if (useCVA) {
      types += `, VariantProps<typeof ${cvaName}>`
    }

    types += ` {
      ${props}
    }`
  }

  return `${options.includeReactImport ? "import React from 'react'" : ''}
  ${useCVA ? `import { cva, type VariantProps } from "class-variance-authority"` : ''}
  ${types}
  export const ${componentName}${options.usesTypeScript ? `: React.FC<${componentName}Props>` : ''} = ({ className, children, ...props }) => {

  }`
}