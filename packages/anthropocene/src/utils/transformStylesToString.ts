import { ElementSchema } from '@configTypes/element/element'
import { createClassName } from '@utils/createClassName';

function camelCaseToKebabCase(property: string): string {
  return property.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
}

export const transformStylesToString = async (configFile: ElementSchema) => {

  const baseClassName = createClassName(configFile.name)

  const childrenWithText = configFile.children?.filter(child => child.isText)

  let textProps = {}

  if (childrenWithText && childrenWithText.length === 1) {
    textProps = childrenWithText[0]?.styles
  }

  const properties = Object.entries(configFile.styles).map(([key, value]) => {
    return `${camelCaseToKebabCase(key)}: ${value};`
  }).join('\n')

  const variantStyles = configFile.variants?.map(variant => {
    return `.${baseClassName}-${variant.props?.map(prop => prop.value).join('-')} {
    ${Object.entries(variant.styles).map(([key, value]) => {
      return `${camelCaseToKebabCase(key)}: ${value};`
    }).join('\n')}
    }`
  }).join('\n')

  return `
.${baseClassName} {
  ${properties}
  ${Object.entries(textProps).map(([key, value]) => {
return `${camelCaseToKebabCase(key)}: ${value};`
  }).join('\n')}
}
${variantStyles}
`
}
