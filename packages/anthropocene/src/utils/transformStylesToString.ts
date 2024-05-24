import { ElementSchema } from '@configTypes/element/element'
import { createClassName } from '@utils/createClassName';

function camelCaseToKebabCase(property: string): string {
  return property.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
}

function generateCSSForElement(element: ElementSchema): string {
  const baseClassName = createClassName(element.name);

  const properties = Object.entries(element.styles)
    .map(([key, value]) => `${camelCaseToKebabCase(key)}: ${value};`)
    .join('\n');

  const variantStyles = element.variants
    ?.map(variant => generateVariantCSS(variant))
    .join('\n') || '';

  const childrenStyles = element.children
    ?.map(child => generateCSSForElement(child))
    .join('\n') || '';

  return `
.${baseClassName} {
  ${properties}
  ${variantStyles}

  ${childrenStyles}
}
`;
}

function generateVariantCSS(variant: any): string {
  const className = variant.props.map((prop: any) => prop.value).join('-');

  const properties = Object.entries(variant.styles)
    .map(([key, value]) => `${camelCaseToKebabCase(key)}: ${value};`)
    .join('\n');

  const childrenStyles = variant.children
    ?.map((child: any) => generateCSSForElement(child))
    .join('\n') || '';

  return `
&.${className} {
  ${properties}
  ${childrenStyles}
}`;
}

export const transformStylesToString = async (configFile: ElementSchema) => {
  return generateCSSForElement(configFile);
//   const baseClassName = createClassName(configFile.name)

//   const properties = Object.entries(configFile.styles).map(([key, value]) => {
//     return `${camelCaseToKebabCase(key)}: ${value};`
//   }).join('\n')

//   const variantStyles = configFile.variants?.map(variant => {
//     return `
//     &.${variant.props?.map(prop => prop.value).join('-')} {
//       ${Object.entries(variant.styles).map(([key, value]) => {
//       return `${camelCaseToKebabCase(key)}: ${value};`
//       }).join('\n')}
//       ${Object.entries(variant.children || []).map(([key, value]) => {
//         if (value.isText) {
//           return Object.entries(value.styles).map(([key, value]) => {
//             return `${camelCaseToKebabCase(key)}: ${value};`
//           }).join('\n')
//         } else {
//         return `.${createClassName(value.name as string)} {
//           ${Object.entries(value.styles).map(([key, value]) => {
//           return `${camelCaseToKebabCase(key)}: ${value};`
//           }).join('\n')}
//         }`
//         }
//       }).join('\n')}
//     }`
//   }).join('\n')

//   return `

//   .${baseClassName} {
//     ${properties}
//     ${variantStyles ? variantStyles : ''}
//   }

// `

}
