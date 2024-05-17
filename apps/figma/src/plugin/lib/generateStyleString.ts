import { Styles } from './interfaces'

const kebabCase = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase()

export function generateStyleString(styles: Styles): string {
  const styleString = []

  Object.entries(styles).forEach((style) => {
    if (style[0] !== 'breakpoint') {
      if (style[1] && style[1].defined) {
        if (style[1].unit === 'auto') {
          if (style[1].value === 'auto') {
            styleString.push(`${kebabCase(style[0])}: auto`)
          } else {
            styleString.push(
              `${kebabCase(style[0])}: ${style[1].value}${style[1].unit !== 'auto' ? style[1].unit : 'px'}`,
            )
          }
        } else if (style[0] === 'background' || style[0] === 'color') {
          if (style[1].colorFormat === 'GRADIENT') {
            styleString.push(`background-image: ${style[1].value.gradientString}`)
          } else if (style[1].colorFormat === 'HEX') {
            styleString.push(`${kebabCase(style[0])}: ${style[1].value.hexString}`)
          } else {
            styleString.push(`${kebabCase(style[0])}: ${style[1].value.rgbString}`)
          }
        } else if (typeof style[1].value === 'object') {
          const values: any[] = Object.values(style[1].value)
          const isEqual = values.map((item: any) => item.value).every((item, i, arr) => item === arr[0])
          if ('hexString' in values[0] && isEqual) {
            styleString.push(`${kebabCase(style[0])}: ${values[0].hexString}`)
          } else if (isEqual && values[0].value !== 0) {
            styleString.push(`${kebabCase(style[0])}: ${values[0].value}${values[0].unit ? values[0].unit : ''}`)
          } else if (!values.every((item) => item.value === 0)) {
            styleString.push(
              `${kebabCase(style[0])}: ${values.map((item) => item.value + (item.unit ? item.unit : '')).join(' ')}`,
            )
          }
        } else if (style[1].type === 'STRING') {
          styleString.push(`${kebabCase(style[0])}: ${style[1].value}`)
        } else if (style[1].type === 'NUMBER') {
          styleString.push(`${kebabCase(style[0])}: ${style[1].value}${style[1].unit ?? ''}`)
        } else {
          styleString.push(`${kebabCase(style[0])}: ${style[1].value}`)
        }
      }
    }
  })

  return styleString.join('; ') + ';'
}
