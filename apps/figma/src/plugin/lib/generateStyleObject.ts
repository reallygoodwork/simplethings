import { Styles } from './interfaces'

export function generateStyleObject(styles: Styles): Record<string, any> {
  const styleObject = {}

  Object.entries(styles).forEach((style) => {
    if (style[0] !== 'breakpoint') {
      if (style[1] && style[1].defined) {
        if (style[1].unit === 'auto') {
          if (style[1].value === 'auto') {
            styleObject[style[0]] = 'auto'
          } else {
            styleObject[style[0]] = style[1].value + (style[1].unit || 'px')
          }
        } else if (style[0] === 'background' || style[0] === 'color') {
          if (style[1].colorFormat === 'GRADIENT') {
            styleObject['backgroundImage'] = style[1].value.gradientString
          } else if (style[1].colorFormat === 'HEX') {
            styleObject[style[0]] = style[1].value.hexString
          } else {
            styleObject[style[0]] = style[1].value.rgbString
          }
        } else if (typeof style[1].value === 'object') {
          const values: any[] = Object.values(style[1].value)
          const isEqual = values.map((item: any) => item.value).every((item, i, arr) => item === arr[0])
          if ('hexString' in values[0] && isEqual) {
            styleObject[style[0]] = values[0].hexString
          } else if (isEqual && values[0].value !== 0) {
            styleObject[style[0]] = values[0].value + (values[0].unit || '')
          } else if (!values.every((item) => item.value === 0)) {
            styleObject[style[0]] = values.map((item) => item.value + (item.unit || '')).join(' ')
          }
        } else if (style[1].type === 'STRING') {
          styleObject[style[0]] = style[1].value
        } else if (style[1].type === 'NUMBER') {
          styleObject[style[0]] = style[1].value + (style[1].unit || '')
        } else {
          styleObject[style[0]] = style[1].value
        }
      }
    }
  })

  return styleObject
}
