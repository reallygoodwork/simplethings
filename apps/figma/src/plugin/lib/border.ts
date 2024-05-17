import { colord } from 'colord'
import { Styles } from './interfaces'

export function borderColor(borderColorConfig: Styles['borderColor'], node: SceneNode): Styles['borderColor'] {
  // @ts-ignore
  const stroke = node?.strokes !== figma.mixed && node.strokes.length > 0 ? node.strokes[0] : null
  const borderColor =
    stroke?.type === 'SOLID'
      ? colord({
          r: stroke.color.r * 255,
          g: stroke.color.g * 255,
          b: stroke.color.b * 255,
        })
          .alpha(stroke.opacity ?? 1)
          .toHex()
      : undefined
  if (borderColor) {
    return {
      ...borderColorConfig,
      value: {
        // @ts-ignore
        ...borderColorConfig.value,
        top: {
          ...borderColorConfig.value.top,
          hexString: borderColor,
          rgbString: colord(borderColor).toRgbString(),
          rgba: colord(borderColor).toRgb(),
          alpha: colord(borderColor).alpha(),
        },
        right: {
          ...borderColorConfig.value.right,
          hexString: borderColor,
          rgbString: colord(borderColor).toRgbString(),
          rgba: colord(borderColor).toRgb(),
          alpha: colord(borderColor).alpha(),
        },
        bottom: {
          ...borderColorConfig.value['bottom'],
          hexString: borderColor,
          rgbString: colord(borderColor).toRgbString(),
          rgba: colord(borderColor).toRgb(),
          alpha: colord(borderColor).alpha(),
        },
        left: {
          ...borderColorConfig.value['left'],
          hexString: borderColor,
          rgbString: colord(borderColor).toRgbString(),
          rgba: colord(borderColor).toRgb(),
          alpha: colord(borderColor).alpha(),
        },
      },
      defined: true,
    }
  } else {
    return borderColorConfig
  }
}
export function borderStyle(borderStyleConfig: Styles['borderStyle'], node: SceneNode): Styles['borderStyle'] {
  // @ts-ignore
  const stroke = node?.strokes !== figma.mixed && node.strokes.length > 0 ? node.strokes[0] : null
  if (stroke) {
    if ('dashPattern' in node && node.dashPattern.length > 0) {
      if (node.dashPattern[0] === node.dashPattern[1]) {
        return {
          ...borderStyleConfig,
          value: {
            // @ts-ignore
            ...borderStyleConfig.value,
            top: {
              ...borderStyleConfig.value['top'],
              value: 'dotted',
              defined: true,
            },
            right: {
              ...borderStyleConfig.value['right'],
              value: 'dotted',
              defined: true,
            },
            bottom: {
              ...borderStyleConfig.value['bottom'],
              value: 'dotted',
              defined: true,
            },
            left: {
              ...borderStyleConfig.value['left'],
              value: 'dotted',
              defined: true,
            },
          },
          defined: true,
        }
      } else {
        return {
          ...borderStyleConfig,
          value: {
            // @ts-ignore
            ...borderStyleConfig.value,
            top: {
              ...borderStyleConfig.value['top'],
              value: 'dashed',
              defined: true,
            },
            right: {
              ...borderStyleConfig.value['right'],
              value: 'dashed',
              defined: true,
            },
            bottom: {
              ...borderStyleConfig.value['bottom'],
              value: 'dashed',
              defined: true,
            },
            left: {
              ...borderStyleConfig.value['left'],
              value: 'dashed',
              defined: true,
            },
          },
          defined: true,
        }
      }
    } else {
      return {
        ...borderStyleConfig,
        value: {
          // @ts-ignore
          ...borderStyleConfig.value,
          top: {
            ...borderStyleConfig.value['top'],
            value: 'solid',
            defined: true,
          },
          right: {
            ...borderStyleConfig.value['right'],
            value: 'solid',
            defined: true,
          },
          bottom: {
            ...borderStyleConfig.value['bottom'],
            value: 'solid',
            defined: true,
          },
          left: {
            ...borderStyleConfig.value['left'],
            value: 'solid',
            defined: true,
          },
        },
        defined: true,
      }
    }
  } else {
    return borderStyleConfig
  }
}

export function borderWidth(borderWeightConfig: Styles['borderWidth'], node: SceneNode): Styles['borderWidth'] {
  // @ts-ignore
  const stroke = node?.strokes !== figma.mixed && node.strokes.length > 0 ? node.strokes[0] : null

  if (stroke) {
    if ('strokeTopWeight' in node) {
      if (
        node.strokeTopWeight === node.strokeBottomWeight &&
        node.strokeTopWeight === node.strokeLeftWeight &&
        node.strokeTopWeight === node.strokeRightWeight
      ) {
        return {
          ...borderWeightConfig,
          defined: true,
          value: {
            // @ts-ignore
            ...borderWeightConfig.value,
            top: {
              ...borderWeightConfig.value.top,
              value: Math.ceil(parseInt(node.strokeTopWeight.toFixed(0))),
              unit: 'px',
              defined: true,
            },
            right: {
              ...borderWeightConfig.value.right,
              value: parseInt(node.strokeTopWeight.toFixed(0)),
              unit: 'px',
              defined: true,
            },
            bottom: {
              ...borderWeightConfig.value.bottom,
              value: parseInt(node.strokeTopWeight.toFixed(0)),
              unit: 'px',
              defined: true,
            },
            left: {
              ...borderWeightConfig.value.left,
              value: parseInt(node.strokeTopWeight.toFixed(0)),
              unit: 'px',
              defined: true,
            },
          },
        }
      } else {
        return {
          ...borderWeightConfig,
          defined: true,
          value: {
            // @ts-ignore
            ...borderWeightConfig.value,
            top: {
              ...borderWeightConfig.value.top,
              value: parseInt(node.strokeTopWeight.toFixed(0)),
              unit: 'px',
              defined: true,
            },
            right: {
              ...borderWeightConfig.value.right,
              value: parseInt(node.strokeRightWeight.toFixed(0)),
              unit: 'px',
              defined: true,
            },
            bottom: {
              ...borderWeightConfig.value.bottom,
              value: parseInt(node.strokeBottomWeight.toFixed(0)),
              unit: 'px',
              defined: true,
            },
            left: {
              ...borderWeightConfig.value.left,
              value: parseInt(node.strokeLeftWeight.toFixed(0)),
              unit: 'px',
              defined: true,
            },
          },
        }
      }
    }
  } else {
    return borderWeightConfig
  }
}
