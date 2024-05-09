import { ComponentStyle } from '@utils/componentStyle/componentStyle'
import { z } from 'zod'
import { camelCase } from 'lodash'

export const zComponentClassname = z.record(z.string(), z.record(z.string(), z.string()))
export const zComponentClassnames = z.array(zComponentClassname)

type ComponentClassname = z.infer<typeof zComponentClassname>
type ComponentClassnames = z.infer<typeof zComponentClassnames>

export const extractClassnames = (componentName: string, style: ComponentStyle): ComponentClassnames => {
  const name = camelCase(componentName)
  const baseStylesObj = style.baseStyles

  const baseStyles: ComponentClassnames = [{ [`.${name}`]: baseStylesObj }]

  const compoundVariants = style.variants.compoundVariants

  const elements = compoundVariants.map((variant) => {
    const { styles, variantClassName } = variant

    const classNameVal = `.${name}-${variantClassName}`
    const stylesObj = { [classNameVal]: styles ?? {} }

    return stylesObj as ComponentClassname
  })
  return [...baseStyles, ...elements]
}