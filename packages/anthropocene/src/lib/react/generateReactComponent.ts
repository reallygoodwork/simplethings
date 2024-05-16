
import { createDependencyString } from '@configTypes/dependencies/createDependencyString'
import { ElementSchema } from '@configTypes/element/element'
import { createComponentName } from '@utils/createComponentName'
import { generateCVAStyles } from '@utils/generateCVAStyles'
import { camelCase } from 'lodash'

const generateReactComponentProps = (configFile: ElementSchema) => {

    const componentProps = configFile.componentProps

    if (!componentProps) {
      return ''
    } else {
      const props = componentProps
        .map(
          (prop) =>
            `${camelCase(prop.name)}${prop.defaultValue !== undefined && prop.defaultValue !== '' ? ` = ${typeof prop.defaultValue !== 'string' ? prop.defaultValue : `'${prop.defaultValue}'`}` : ''}`,
        )
        // .concat('className')
        .concat('...rest')
        .join(',\n')

      return props
    }

}

export const generateReactComponent = async (configFile: ElementSchema) => {
  const componentName = createComponentName(configFile.name)
  const dependencies = createDependencyString({
    dependencies: configFile.dependencies,
    hasVariants: configFile.variants ? true : false,
    library: 'react',
  })
  const cvaStyles = generateCVAStyles(configFile)
  const componentProps = generateReactComponentProps(configFile)

  const hasCVA = configFile && configFile.variants && Object.keys(configFile.variants).length > 0
  const children = configFile.children

  return `${dependencies}
${hasCVA ? cvaStyles : '\n'}

interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement>${hasCVA ? `, VariantProps<typeof ${componentName}CVA>` : ''} {
  ${configFile.componentProps?.map((prop) => `${prop.name}${!prop.required ? '?' : ''}: ${prop.type}`).join('\n')}
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  ${componentProps}
}) => {
  return <${configFile.elementType} className={${hasCVA ? `${componentName}CVA({ className, ${configFile.variants ? Object.keys(configFile.variants).join(', ') : ''} })` : ''}}>
    ${children?.map((child) => (child.isText ? (child.boundProps ? `{${child.boundProps}}` : child.textValue) : `<${child.elementType}></${child.elementType}>`)).join('\n')}
  </${configFile.elementType}>
}

${componentName}.displayName = '${componentName}'

  `
}
