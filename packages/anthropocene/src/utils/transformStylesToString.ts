import { ElementSchema } from '@configTypes/element/element'
import { createClassName } from '@utils/createClassName';

function camelCaseToKebabCase(property: string): string {
  return property.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
}

export const transformStylesToString = async (configFile: ElementSchema) => {

  const baseClassName = createClassName(configFile.name)

  const childrenWithText = configFile.children?.filter(child => child.isText)

  const properties = Object.entries(configFile.styles).map(([key, value]) => {
    return `${camelCaseToKebabCase(key)}: ${value};`
  }).join('\n')

  const variantStyles = configFile.variants?.map(variant => {
    return `
    &.${variant.props?.map(prop => prop.value).join('-')} {
      ${Object.entries(variant.styles).map(([key, value]) => {
      return `${camelCaseToKebabCase(key)}: ${value};`
      }).join('\n')}
      ${Object.entries(variant.children || []).map(([key, value]) => {
        if (value.isText) {
          return Object.entries(value.styles).map(([key, value]) => {
            return `${camelCaseToKebabCase(key)}: ${value};`
          }).join('\n')
        } else {
        return `.${createClassName(value.name as string)} {
          ${Object.entries(value.styles).map(([key, value]) => {
          return `${key}: ${value};`
          }).join('\n')}

        }`
        }
      }).join('\n')}
    }`
  }).join('\n')

  return `

  .${baseClassName} {
    ${properties}
    ${variantStyles ? variantStyles : ''}
  }

`

}
