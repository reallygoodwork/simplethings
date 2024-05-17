import { colord } from 'colord'
import { Styles } from './interfaces'
import { convertToDegree, linearGradientPaintToHex } from './utils/linearGradientToHex'

/**
 * @param styleConfig - The background config object
 * @param node - The node to get the background from
 * @param inherited - Whether the background is inherited from a parent node
 * @returns The background config object
 **/
export function background(
  styleConfig: Styles['background'],
  node: SceneNode,
  inherited = false,
): Styles['background'] {
  if ('fills' in node && node.fills) {
    const fill = node.fills !== figma.mixed && node.fills.length > 0 ? node.fills[0] : null
    let background = undefined
    switch (fill?.type) {
      case 'SOLID':
        if (fill.visible) {
          const alpha = fill.opacity ?? 1
          background = {
            ...styleConfig,
            value: {
              ...styleConfig.value,
              hexString: colord({
                r: fill.color.r * 255,
                g: fill.color.g * 255,
                b: fill.color.b * 255,
              })
                .alpha(alpha)
                .toHex(),
              rgbString: colord({
                r: fill.color.r * 255,
                g: fill.color.g * 255,
                b: fill.color.b * 255,
              })
                .alpha(alpha)
                .toRgbString(),
              rgba: colord({
                r: fill.color.r * 255,
                g: fill.color.g * 255,
                b: fill.color.b * 255,
              })
                .alpha(alpha)
                .toRgb(),
              alpha: alpha,
            },
            colorFormat: alpha === 1 ? 'HEX' : 'RGBA',
          }
        }
        break
      case 'GRADIENT_LINEAR':
        background = {
          ...styleConfig,
          value: {
            ...styleConfig.value,
            gradientString: `linear-gradient(${linearGradientPaintToHex(fill)})`,
            gradientConfig: {
              stops: fill.gradientStops.map((stop) => ({
                color: colord({
                  r: stop.color.r * 255,
                  g: stop.color.g * 255,
                  b: stop.color.b * 255,
                }).toHex(),
                position: parseInt((stop.position * 100).toFixed(0)),
              })),
              type: 'linear',
              angle: convertToDegree(fill.gradientTransform),
            },
          },
          colorFormat: 'GRADIENT',
        }
        break
      case 'GRADIENT_RADIAL':
        // TODO: fix radial gradient
        // return radialGradientPaintToCss(fill)
        break
      case 'GRADIENT_ANGULAR':
        // TODO: fix Angular gradient
        // return angularGradientPaintToCss(fill)
        break
      case 'GRADIENT_DIAMOND':
        // TODO: fix Diamond gradient
        // return diamondGradientPaintToCss(fill)
        break
    }

    if (background) {
      return {
        ...styleConfig,
        ...background,
        hasChildStyles: inherited,
        defined: true,
      }
    } else {
      return {
        ...styleConfig,
        defined: false,
      }
    }
  } else {
    return {
      ...styleConfig,
      value: {
        ...styleConfig.value,
        hexString: 'transparent',
        rgbString: 'transparent',
        rgba: { r: 0, g: 0, b: 0, a: 0 },
        alpha: 0,
      },
      defined: false,
      colorFormat: 'HEX',
    }
  }
}
