import { ComponentConfig } from '@configTypes/component'
import { createDependencyString } from '@configTypes/dependencies/createDependencyString'
import { createComponentName } from '@utils/createComponentName'
import { generateCVAStyles } from '@utils/generateCVAStyles'
import { camelCase } from 'lodash'



const generateComponentProps = (configFile: ComponentConfig) => {
  const componentProps = configFile.props

  if (!componentProps) {
    return
  } else {
    return componentProps
      .map(
        (prop) =>
          `${camelCase(prop.name)}${prop.defaultValue !== undefined && prop.defaultValue !== '' ? ` = ${typeof prop.defaultValue !== 'string' ? prop.defaultValue : `'${prop.defaultValue}'`}` : ''}`,
      )
      .concat('className')
      .concat('...rest')
      .join(',\n')
  }
}

export const generateReactComponent = (configFile: ComponentConfig) => {
  const componentName = createComponentName(configFile.name)
  const dependencies = createDependencyString(configFile.dependencies)

  const hasCVA = configFile.cvaSchema
  const children = configFile.children

  return `${dependencies}
${hasCVA ? generateCVAStyles(configFile) : '\n'}

interface ${componentName}Props extends React.HTMLAttributes<${configFile.componentType}>${hasCVA ? `, VariantProps<typeof ${componentName}CVA>` : ''} {
  ${configFile.typeScriptProps?.map((prop) => `${prop.name}${!prop.required ? '?' : ''}: ${prop.type}`).join('\n')}
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  ${generateComponentProps(configFile)}
}) => {
  return <${configFile.tagName} className={${hasCVA ? `${componentName}CVA({ className, ${configFile.cvaSchema?.variants ? Object.keys(configFile.cvaSchema?.variants).join(', ') : ''} })` : ''}}>
    ${children?.map((child) => (child.isText ? (child.associatedProp ? `{${child.associatedProp}}` : child.textValue) : `<${child.tagName}></${child.tagName}>`)).join('\n')}
  </${configFile.tagName}>
}

${componentName}.displayName = '${componentName}'

  `
}
