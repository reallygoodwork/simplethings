import { colord } from 'colord'
import { Styles } from './interfaces'
/**
 * @param colorConfig - The color config object
 * @param node - The node to get the color from
 * @param inherited - Whether the color is inherited from a parent node
 * @returns The color config object
 * */
export function color(colorConfig: Styles['color'], node: any, inherited = false): Styles['color'] {
  if (!node.fills || node.fills?.length === 0) {
    return colorConfig
  }
  const textColor = node['fills'][0].color
  const alpha = node['fills'][0].opacity ?? 1
  return {
    ...colorConfig,
    value: {
      hexString: colord({ r: textColor.r * 255, g: textColor.g * 255, b: textColor.b * 255, a: alpha }).toHex(),
      rgbString: colord({ r: textColor.r * 255, g: textColor.g * 255, b: textColor.b * 255, a: alpha }).toRgbString(),
      rgba: colord({ r: textColor.r * 255, g: textColor.g * 255, b: textColor.b * 255, a: alpha }).toRgb(),
      alpha: alpha,
    },
    hasChildStyles: inherited,
    defined: true,
  }
}
