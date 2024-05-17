import { colord } from 'colord';
import { convertToDegree, linearGradientPaintToHex, rgbaToHex, solidPaintToHex } from '../lib/stylelibs/tailwind/utils/rgbaToHex'

export function generateConfigStyles(
  node: any,
  parentLayout: BaseFrameMixin['layoutMode'] | undefined,
  groupTopLeft: { x: number; y: number } = { x: 0, y: 0 },
  firstChild = false,
  parentDefinedStyles = [],
) {
  const parentDefined = []
  const nonInherited = []
  const dimensions = {
    display: {
      value: 'block',
      type: valueType['STRING'],
      usage: usage['ALL'],
      options: [
        'flex',
        'inline-flex',
        'block',
        'inline-block',
        'inline',
        'grid',
        'inline-grid',
        'table',
        'inline-table',
        'none',
      ],
      default: 'block',
      defined: false,
    },
    width: {
      value: 'auto',
      unit: units['AUTO'],
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 'auto',
      defined: false,
    },
    height: {
      value: 'auto',
      unit: units['AUTO'],
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 'auto',
      defined: false,
    },

    padding: {
      value: {
        top: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        right: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        bottom: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        left: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
      },
      usage: usage['ALL'],
      defined: false,
    },
    overflow: {
      value: 'auto',
      type: valueType['STRING'],
      options: ['visible', 'hidden', 'scroll', 'auto'],
      usage: usage['ALL'],
      default: 'auto',
      defined: false,
    },
  }

  const styles = {
    'border-radius': {
      value: {
        topLeft: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        topRight: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        bottomLeft: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        bottomRight: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
      },
      type: valueType['NUMBER'],
      usage: usage['NOTTEXT'],
      default: {
        topLeft: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        topRight: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        bottomLeft: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
        bottomRight: {
          value: 0,
          unit: units['PIXELS'],
          type: valueType['NUMBER'],
          default: 0,
          defined: false,
        },
      },
      defined: false,
    },
    'border-width': {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['NOTTEXT'],
      default: 0,
      defined: false,
    },
    'border-top-width': {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['NOTTEXT'],
      default: 0,
      defined: false,
    },
    'border-left-width': {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['NOTTEXT'],
      default: 0,
      defined: false,
    },
    'border-bottom-width': {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['NOTTEXT'],
      default: 0,
      defined: false,
    },
    'border-right-width': {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['NOTTEXT'],
      default: 0,
      defined: false,
    },
    'border-color': {
      value: {
        hex: '#000000',
        rgb: 'rgb(0, 0, 0)',
        rgba: {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        },
        alpha: 1,
      },
      color: color['HEX'],
      type: valueType['COLOR'],
      usage: usage['NOTTEXT'],
      default: {
        hex: '#000000',
        rgb: 'rgb(0, 0, 0)',
        rgba: {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        },
        alpha: 1,
      },
      defined: false,
    },
    'border-style': {
      value: 'solid',
      type: valueType['STRING'],
      usage: usage['NOTTEXT'],
      options: ['solid', 'dashed', 'dotted'],
      default: 'solid',
      defined: false,
    },
  }

  const layout = {
    'flex-direction': {
      value: 'row',
      type: valueType['STRING'],
      options: ['column', 'row', 'column-reverse', 'row-reverse'],
      usage: usage['ALL'],
      default: 'row',
      defined: false,
    },
    'justify-content': {
      value: 'flex-start',
      type: valueType['STRING'],
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      usage: usage['ALL'],
      default: 'flex-start',
      defined: false,
    },
    'align-items': {
      value: 'normal',
      type: valueType['STRING'],
      options: ['normal', 'center', 'flex-end', 'flex-start', 'space-around'],
      usage: usage['ALL'],
      default: 'normal',
      defined: false,
    },
    gap: {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 0,
      defined: false,
    },
    'flex-grow': {
      value: 0,
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 0,
      defined: false,
    },
    'align-self': {
      value: 'auto',
      type: valueType['STRING'],
      options: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
      usage: usage['ALL'],
      default: 'auto',
      defined: false,
    },

    'justify-self': {
      value: 'auto',
      type: valueType['STRING'],
      options: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
      usage: usage['NOTTEXT'],
      default: 'auto',
      defined: false,
    },
  }

  const text = {
    color: {
      type: valueType['STRING'],
      usage: usage['ALL'],
      color: color['HEX'],
      value: {
        hex: '#000000',
        rgba: {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        },
        rgb: 'rgb(0, 0, 0)',
        alpha: 1,
      },
      default: {
        hex: '#000000',
        rgb: 'rgb(0, 0, 0)',
        rgba: {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        },
        alpha: 1,
      },
      defined: false,
      inherited: false,
    },
    'font-size': {
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      value: 16,
      unit: units['PIXELS'],
      default: 16,
      defined: false,
      inherited: false,
    },
    'font-weight': {
      type: valueType['NUMBER'],
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      usage: usage['ALL'],
      value: 400,
      default: 400,
      defined: false,
      inherited: false,
    },
    'font-style': {
      type: valueType['STRING'],
      options: ['normal', 'italic'],
      usage: usage['ALL'],
      value: 'normal',
      default: 'normal',
      defined: false,
      inherited: false,
    },
    'font-family': {
      type: valueType['STRING'],
      usage: usage['ALL'],
      value: 'sans-serif',
      default: 'sans-serif',
      defined: false,
      inherited: false,
    },
    'line-height': {
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      value: 1.5,
      unit: units['PIXELS'],
      default: 1.5,
      defined: false,
      inherited: false,
    },
    'text-align': {
      type: valueType['STRING'],
      options: ['left', 'center', 'right', 'justify'],
      usage: usage['ALL'],
      value: 'left',
      default: 'left',
      defined: false,
      inherited: false,
    },
    'text-transform': {
      type: valueType['STRING'],
      options: ['uppercase', 'lowercase', 'capitalize', 'none'],
      usage: usage['ALL'],
      value: 'none',
      default: 'none',
      defined: false,
      inherited: false,
    },
    'text-decoration': {
      type: valueType['STRING'],
      options: ['none', 'underline', 'line-through'],
      usage: usage['ALL'],
      value: 'none',
      default: 'none',
      defined: false,
      inherited: false,
    },
    'text-overflow': {
      type: valueType['STRING'],
      options: ['clip', 'ellipsis', 'truncate'],
      usage: usage['ALL'],
      value: 'clip',
      default: 'clip',
      defined: false,
    },

    'letter-spacing': {
      type: valueType['NUMBER'],
      usage: usage['TEXT'],
      value: 0,
      unit: units['PIXELS'],
      default: 0,
      defined: false,
      inherited: false,
    },
  }

  const position = {
    position: {
      value: 'static',
      type: valueType['STRING'],
      options: ['relative', 'absolute', 'fixed', 'static', 'sticky'],
      usage: usage['ALL'],
      default: 'static',
      defined: false,
    },
    top: {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 0,
      defined: false,
    },
    left: {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 0,
      defined: false,
    },
    right: {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 0,
      defined: false,
    },
    bottom: {
      value: 0,
      unit: units['PIXELS'],
      type: valueType['NUMBER'],
      usage: usage['ALL'],
      default: 0,
      defined: false,
    },
  }

  const fills = {
    background: {
      value: {
        gradient: '',
        gradientConfig: {
          stops: [],
          type: 'linear',
          angle: 0,
        },
        hex: '#000000',
        rgba: {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        },
        rgb: 'rgb(0, 0, 0)',
        alpha: 1,
      },
      type: valueType['STRING'],
      usage: usage['ALL'],
      color: color['HEX'],
      default: {
        hex: '#000000',
        rgba: {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        },
        rgb: 'rgb(0, 0, 0)',
        alpha: 1,
      },
      defined: false,
    },
    'object-fit': {
      value: 'none',
      type: valueType['STRING'],
      usage: usage['FILL'],
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      default: 'none',
      defined: false,
    },
  }

  try {
    // If node has text children and there are common styles, apply them to the parent
    if (
      node.type !== 'TEXT' &&
      node.children &&
      node.children.length > 1 &&
      node.children.filter((child) => child.type === 'TEXT').length
    ) {
      const textAlign = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.textAlignHorizontal)
        .every((val, i, arr) => val === arr[0])

      if (textAlign && node.children[0].textAlignHorizontal !== 'LEFT') {
        parentDefined.push('text-align')
        text['text-align'] = {
          ...text['text-align'],
          value: (() => {
            switch (node.children[0].textAlignHorizontal) {
              case 'CENTER':
                return 'CENTER'
              case 'JUSTIFIED':
                return 'justify'
              case 'RIGHT':
                return 'right'
            }
          })(),
          defined: true,
        }
      }

      const textDecoration = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.textDecoration)
        .every((val, i, arr) => val === arr[0])

      if (textDecoration && node.children[0].textDecoration !== 'NONE') {
        parentDefined.push('text-decoration')
        text['text-decoration'] = {
          ...text['text-decoration'],
          value: (() => {
            switch (node.children[0].textDecoration) {
              case 'UNDERLINE':
                return 'underline'
              case 'STRIKETHROUGH':
                return 'line-through'
            }
          })(),
          defined: true,
        }
      }

      const textTransform = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.textCase)
        .every((val, i, arr) => val === arr[0])

      if (textTransform && node.children[0].textCase !== 'ORIGINAL') {
        parentDefined.push('text-transform')
        text['text-transform'] = {
          ...text['text-transform'],
          value: (() => {
            switch (node.children[0].textCase) {
              case 'UPPER':
                return 'uppercase'
              case 'LOWER':
                return 'lowercase'
              case 'TITLE':
                return 'capitalize'
            }
          })() as string,
          defined: true,
        }
      }

      const letterSpacing = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.letterSpacing.value)
        .every((val, i, arr) => val === arr[0])

      if (letterSpacing && node.children[0].letterSpacing.value !== 0) {
        parentDefined.push('letter-spacing')
        if (node.children[0].letterSpacing.unit === 'PERCENT') {
          text['letter-spacing'] = {
            ...text['letter-spacing'],
            value: parseFloat(node.children[0].letterSpacing.value.toFixed(2)) * 0.01,
            unit: units['EM'],
            defined: true,
          }
        } else if (node.children[0].letterSpacing.unit === 'PIXELS') {
          text['letter-spacing'] = {
            ...text['letter-spacing'],
            unit: units['PIXELS'],
            value: parseFloat(node.children[0].letterSpacing.value.toFixed(0)),
            defined: true,
          }
        }
      }

      const lineHeight = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.lineHeight.value)
        .every((val, i, arr) => val === arr[0])

      if (lineHeight && node.children[0].lineHeight.unit !== 'AUTO' && node.children[0].lineHeight !== figma.mixed) {
        parentDefined.push('line-height')
        text['line-height'] = {
          ...text['line-height'],
          value: parseFloat(node.children[0].lineHeight.value.toFixed(2)),
          defined: true,
        }
      }
      const fontSize = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.fontSize)
        .every((val, i, arr) => val === arr[0])

      if (fontSize && node.children[0].fontSize !== figma.mixed) {
        parentDefined.push('font-size')
        text['font-size'] = {
          ...text['font-size'],
          value: node.children[0].getRangeFontSize(0, 1),
          defined: true,
        }
      }

      const fontFamily = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.fontName.family)
        .every((val, i, arr) => val === arr[0])

      if (fontFamily && node.children[0].fontName.family !== figma.mixed) {
        parentDefined.push('font-family')
        text['font-family'] = {
          ...text['font-family'],
          value: node.children[0].getRangeFontName(0, 1).family,
          defined: true,
        }
      }

      const fontWeight = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.fontWeight)
        .every((val, i, arr) => val === arr[0])

      if (fontWeight && node.children[0].fontWeight !== 400) {
        parentDefined.push('font-weight')
        text['font-weight'] = {
          ...text['font-weight'],
          value: node.children[0].fontWeight,
          defined: true,
        }
      }

      const fontStyle = node.children
        .filter((child) => child.type === 'TEXT')
        .map((child) => child.getRangeFontName(0, 1).style)
        .every((val, i, arr) => val === arr[0])

      if (
        fontStyle &&
        node.children[0].getRangeFontName(0, 1).style !== figma.mixed &&
        node.children[0].getRangeFontName(0, 1).style === 'ITALIC'
      ) {
        parentDefined.push('font-style')
        text['font-style'] = {
          ...text['font-style'],
          value: 'italic',
          defined: true,
        }
      }

      const fills = node.children
        .filter(
          (child: any) =>
            child.type === 'TEXT' &&
            child.fills !== figma.mixed &&
            child.fills?.length &&
            child.fills[0].type === 'SOLID',
        )
        .map((child) => child.getRangeFontName(0, 1).style)
        .every((val, i, arr) => val === arr[0])

      if (fills) {
        parentDefined.push('color')
        const textColor = rgbaToHex({
          ...node.children[0].fills[0].color,
          a: node.children[0].fills[0].opacity ?? 1,
        })
        text.color = {
          ...text.color,
          value: {
            hex: colord(textColor).alpha(node.children[0].fills[0].opacity).toHex(),
            rgb: colord(textColor).alpha(node.children[0].fills[0].opacity).toRgbString(),
            rgba: colord(textColor).alpha(node.children[0].fills[0].opacity).toRgb(),
            alpha: node.children[0].fills[0].opacity ?? 1,
          },
          defined: true,
        }
      }
    }
    if (node.type === 'TEXT') {
      if (node.textAlignHorizontal !== 'LEFT') {
        text['text-align'] = {
          ...text['text-align'],
          value: (() => {
            switch (node.textAlignHorizontal) {
              case 'CENTER':
                return 'CENTER'
              case 'JUSTIFIED':
                return 'justify'
              case 'RIGHT':
                return 'right'
            }
          })(),
          inherited: parentDefinedStyles.includes('text-align'),
          defined: true,
        }
      }
      if (node.textCase !== 'ORIGINAL') {
        text['text-transform'] = {
          ...text['text-transform'],
          value: (() => {
            switch (node.textCase) {
              case 'UPPER':
                return 'uppercase'
              case 'LOWER':
                return 'lowercase'
              case 'TITLE':
                return 'capitalize'
            }
          })(),
          inherited: parentDefinedStyles.includes('text-transform'),
          defined: true,
        }
      }
      if (node.textDecoration !== 'NONE') {
        text['text-decoration'] = {
          ...text['text-decoration'],
          value: (() => {
            switch (node.textDecoration) {
              case 'UNDERLINE':
                return 'underline'
              case 'STRIKETHROUGH':
                return 'line-through'
            }
          })(),
          inherited: parentDefinedStyles.includes('text-decoration'),
          defined: true,
        }
      }
      text['font-size'] = {
        ...text['font-size'],
        value: node.getRangeFontSize(0, 1),
        inherited: parentDefinedStyles.includes('font-size'),
        defined: true,
      }

      text['font-family'] = {
        ...text['font-family'],
        value: node.getRangeFontName(0, 1).family,
        inherited: parentDefinedStyles.includes('font-family'),
        defined: true,
      }

      text['font-weight'] = {
        ...text['font-weight'],
        value: node.fontWeight,
        inherited: parentDefinedStyles.includes('font-weight'),
        defined: true,
      }

      if (node.getRangeFontName(0, 1).style.toLowerCase() === 'italic') {
        text['font-style'] = {
          ...text['font-style'],
          value: 'italic',
          inherited: parentDefinedStyles.includes('font-style'),
          defined: true,
        }
      }

      const fills = node?.fills

      if (fills !== figma.mixed && fills?.length && fills[0].type === 'SOLID') {
        const textColor = rgbaToHex({
          ...fills[0].color,
          a: fills[0].opacity ?? 1,
        })
        text.color = {
          ...text.color,
          value: {
            hex: colord(textColor).alpha(fills[0].opacity).toHex(),
            rgb: colord(textColor).alpha(fills[0].opacity).toRgbString(),
            rgba: colord(textColor).alpha(fills[0].opacity).toRgb(),
            alpha: fills[0].opacity ?? 1,
          },
          inherited: parentDefinedStyles.includes('color'),
          defined: true,
        }
      }

      if (node.lineHeight !== figma.mixed && node.lineHeight.unit !== 'AUTO') {
        text['line-height'] = {
          ...text['line-height'],
          value: parseFloat(node.lineHeight.value.toFixed(0)),
          inherited: parentDefinedStyles.includes('line-height'),
          defined: true,
        }
      }

      if (node.letterSpacing.value !== 0) {
        if (node.letterSpacing.unit === 'PERCENT') {
          text['letter-spacing'] = {
            ...text['letter-spacing'],
            value: parseFloat(node.letterSpacing.value.toFixed(2)) * 0.01,
            unit: units['EM'],
            inherited: parentDefinedStyles.includes('letter-spacing'),
            defined: true,
          }
        } else if (node.letterSpacing.unit === 'PIXELS') {
          text['letter-spacing'] = {
            ...text['letter-spacing'],
            unit: units['PIXELS'],
            inherited: parentDefinedStyles.includes('letter-spacing'),
            value: parseFloat(node.letterSpacing.value.toFixed(0)),
            defined: true,
          }
        }
      }

      switch (node.textAutoResize) {
        case 'HEIGHT':
          dimensions['height'] = {
            ...dimensions['height'],
            value: 'auto',
            unit: units['AUTO'],
            defined: true,
          }
          break
        case 'TRUNCATE':
          text['text-overflow'] = {
            ...text['text-overflow'],
            value: 'ellipsis',
            defined: true,
          }
      }
    } else {
      if (node.type !== 'FRAME' || (node.type === 'FRAME' && node.layoutMode === 'NONE')) {
        if (node.primaryAxisSizingMode === 'FIXED') {
          dimensions.height = {
            ...dimensions.height,
            value: node.height.toFixed(0),
            defined: true,
            unit: units['PIXELS'],
          }
        }

        if (node.counterAxisSizingMode === 'FIXED') {
          dimensions.width = {
            ...dimensions.width,
            value: node.width.toFixed(0),
            defined: true,
            unit: units['PIXELS'],
          }
        } else if ((node.counterAxisSizingMode === 'AUTO' && !firstChild) || node.layoutPositioning !== 'ABSOLUTE') {
          if (parentLayout !== 'NONE' && node.layoutAlign !== 'STRETCH' && !firstChild) {
            dimensions.width = {
              ...dimensions.width,
              value: '100',
              unit: units['PERCENT'],
              defined: true,
            }
          }
        }
      }
    }

    if (node.parent.type !== 'GROUP' && node.parent.type !== 'COMPONENT_SET' && node.type !== 'COMPONENT') {
      if (
        !firstChild &&
        (parentLayout === 'NONE' ||
          ('layoutPositioning' in node &&
            node.layoutPositioning === 'ABSOLUTE' &&
            node.parent.type !== 'COMPONENT_SET'))
      ) {
        position['position'] = {
          ...position['position'],
          value: 'absolute',
          defined: true,
        }
        position['left'] = {
          ...position['left'],
          value: node.x - groupTopLeft.x,
          defined: true,
        }
        position['top'] = {
          ...position['top'],
          value: node.y - groupTopLeft.y,
          defined: true,
        }
      } else if (node?.children?.length && node?.layoutMode === 'NONE') {
        position['position'] = {
          ...position['position'],
          value: 'relative',
          defined: true,
        }
      }
    }

    if ('layoutGrow' in node) {
      if (parentLayout === 'VERTICAL') {
        if (node.layoutGrow) {
          layout['flex-grow'] = { ...layout['flex-grow'], value: node.layoutGrow, defined: true }
          dimensions['height'] = {
            ...dimensions['height'],
            value: 'auto',
            unit: units['AUTO'],
            defined: true,
          }
        }
        if (node.layoutAlign === 'STRETCH') {
          layout['align-self'] = {
            ...layout['align-self'],
            value: 'stretch',
            defined: true,
          }
          dimensions['width'] = {
            ...dimensions['width'],
            value: 'auto',
            unit: units['AUTO'],
            defined: true,
          }
        }
      } else if (parentLayout === 'HORIZONTAL') {
        if (node.layoutGrow) {
          layout['flex-grow'] = { ...layout['flex-grow'], value: node.layoutGrow, defined: true }
          dimensions['width'] = {
            ...dimensions['width'],
            value: 'auto',
            unit: units['AUTO'],
            defined: true,
          }
        }
        if (node.layoutAlign === 'STRETCH') {
          layout['align-self'] = {
            ...layout['align-self'],
            value: 'stretch',
            defined: true,
          }

          dimensions['height'] = {
            ...dimensions['height'],
            value: 'auto',
            unit: units['AUTO'],
            defined: true,
          }
        }
      }
    }

    if ('clipsContent' in node && node.clipsContent) {
      dimensions['overflow'] = {
        ...dimensions['overflow'],
        value: 'hidden',
        defined: true,
      }
    }

    const fill = node.fills !== figma.mixed && node.fills?.length ? node.fills[0] : undefined

    let background = undefined
    switch (fill?.type) {
      case 'GRADIENT_LINEAR':
        background = {
          ...fills.background,
          value: {
            ...fills.background.value,
            gradient: `linear-gradient(${linearGradientPaintToHex(node.width, node.height, fill)})`,
            gradientConfig: {
              stops: fill.gradientStops.map((stop) => {
                return {
                  color: colord(rgbaToHex(stop.color)).toHex(),
                  position: parseInt((stop.position * 100).toFixed(0)),
                }
              }),
              type: 'linear',
              angle: convertToDegree(fill.gradientTransform),
            },
          },
          color: color['GRADIENT'],
        }
        // return linearGradientPaintToCss(fill)
        break
      case 'GRADIENT_RADIAL':
        // return radialGradientPaintToCss(fill)
        break
      case 'GRADIENT_ANGULAR':
        // return angularGradientPaintToCss(fill)
        break
      case 'GRADIENT_DIAMOND':
        // return diamondGradientPaintToCss(fill)
        break
      case 'IMAGE':
        // return imagePaintToCss(fill)
        fills['object-fit'] = {
          ...fills['object-fit'],
          value: fill.scaleMode === 'FILL' ? 'cover' : 'contain',
          defined: true,
        }
        break
      case 'SOLID':
        if (fill || fill.visible) {
          background = {
            ...fills.background,
            color: color['HEX'],
            value: {
              gradient: '',
              hex: colord(solidPaintToHex(fill))
                .alpha(fill.opacity ?? 1)
                .toHex(),
              rgb: colord(solidPaintToHex(fill))
                .alpha(fill.opacity ?? 1)
                .toRgbString(),
              rgba: colord(solidPaintToHex(fill))
                .alpha(fill.opacity ?? 1)
                .toRgb(),
              alpha: fill.opacity ?? 1,
            },
            defined: true,
          }
        }
        break
      default:
        break
    }

    if (background && node.type !== 'TEXT') {
      fills.background = {
        ...fills.background,
        ...background,
        defined: true,
      }
    }

    if (node.type !== 'TEXT' && node.type !== 'GROUP') {
      if (fill?.type !== 'IMAGE' && node.children) {
        // if there are at least 2 children, and at least 2 of them are not positioned absolutely, then we can use flexbox
        if (node.children.length >= 2 && node.layoutMode !== 'NONE') {
          dimensions.display = {
            ...dimensions.display,
            value: 'flex',
            defined: true,
          }

          if (node.layoutMode === 'VERTICAL' || node.type === 'COMPONENT_SET') {
            layout['flex-direction'] = {
              ...layout['flex-direction'],
              value: 'column',
              defined: true,
            }
          }
          if (node.itemSpacing && node.children.length > 1) {
            layout.gap = {
              ...layout.gap,
              value: node.itemSpacing,
              defined: true,
            }
          }
        }

        if (
          node.paddingTop === node.paddingRight &&
          node.paddingTop === node.paddingBottom &&
          node.paddingTop === node.paddingLeft
        ) {
          if (node.paddingTop) {
            dimensions.padding = {
              ...dimensions.padding,
              value: {
                top: {
                  ...dimensions.padding.value.top,
                  value: node.paddingTop.toFixed(0),
                  defined: true,
                },
                right: {
                  ...dimensions.padding.value.right,
                  value: node.paddingTop.toFixed(0),
                  defined: true,
                },
                bottom: {
                  ...dimensions.padding.value.bottom,
                  value: node.paddingTop.toFixed(0),
                  defined: true,
                },
                left: {
                  ...dimensions.padding.value.left,
                  value: node.paddingTop.toFixed(0),
                  defined: true,
                },
              },
              defined: true,
              usage: usage['NOTTEXT'],
            }
          }
        } else {
          dimensions.padding = {
            ...dimensions.padding,
            value: {
              top: {
                ...dimensions.padding.value.top,
                value: node.paddingTop.toFixed(0),
                defined: true,
              },
              right: {
                ...dimensions.padding.value.right,
                value: node.paddingRight.toFixed(0),
                defined: true,
              },
              bottom: {
                ...dimensions.padding.value.bottom,
                value: node.paddingBottom.toFixed(0),
                defined: true,
              },
              left: {
                ...dimensions.padding.value.left,
                value: node.paddingLeft.toFixed(0),
                defined: true,
              },
            },
            defined: true,
            usage: usage['NOTTEXT'],
          }
        }

        if (node.children.length >= 2 && node.layoutMode !== 'NONE') {
          if (node.type === 'COMPONENT_SET' && node.layoutMode === 'NONE') {
            layout['justify-content'] = {
              ...layout['justify-content'],
              value: 'space-around',
              defined: true,
            }
            layout['align-items'] = {
              ...layout['align-items'],
              value: 'center',
              defined: true,
            }
          } else {
            if (node.primaryAxisAlignItems) {
              layout['justify-content'] = {
                ...layout['justify-content'],
                value: (() => {
                  switch (node.primaryAxisAlignItems) {
                    case 'CENTER':
                      return 'center'
                    case 'MAX':
                      return 'flex-end'
                    case 'MIN':
                      return 'flex-start'
                    case 'SPACE_BETWEEN':
                      return 'space-between'
                  }
                })(),
                defined: true,
              }
            }

            if (node.counterAxisAlignItems) {
              layout['align-items'] = {
                ...layout['align-items'],
                value: (() => {
                  switch (node.counterAxisAlignItems) {
                    case 'CENTER':
                      return 'center'
                    case 'MAX':
                      return 'flex-end'
                    case 'MIN':
                      return 'flex-start'
                    case 'BASELINE':
                      return 'baseline'
                  }
                })(),
                defined: true,
              }
            }
          }
        }
      }
    }

    if (node.type !== 'TEXT') {
      const stroke = node.strokes?.length ? node.strokes[0] : undefined

      const borderColor = stroke?.type === 'SOLID' ? solidPaintToHex(stroke) : undefined
      const borderStyle = borderColor ? stroke?.type : undefined

      if (borderStyle === 'SOLID') {
        if (
          node.strokeTopWeight === node.strokeBottomWeight &&
          node.strokeTopWeight === node.strokeLeftWeight &&
          node.strokeTopWeight === node.strokeRightWeight
        ) {
          if (node.strokeTopWeight) {
            styles['border-width'] = {
              ...styles['border-width'],
              value: node.strokeTopWeight,
              defined: true,
            }
          }
        } else {
          if (node.strokeTopWeight) {
            styles['border-top-width'] = {
              ...styles['border-top-width'],
              value: node.strokeTopWeight,
              defined: true,
            }
          }
          if (node.strokeBottomWeight) {
            styles['border-bottom-width'] = {
              ...styles['border-bottom-width'],
              value: node.strokeBottomWeight,
              defined: true,
            }
          }
          if (node.strokeLeftWeight) {
            styles['border-left-width'] = {
              ...styles['border-left-width'],
              value: node.strokeLeftWeight,
              defined: true,
            }
          }
          if (node.strokeRightWeight) {
            styles['border-right-width'] = {
              ...styles['border-right-width'],
              value: node.strokeRightWeight,
              defined: true,
            }
          }
        }
        if (borderColor) {
          styles['border-color'] = {
            ...styles['border-color'],
            value: {
              hex: colord(borderColor).toHex(),
              rgb: colord(borderColor).toRgbString(),
              rgba: colord(borderColor).toRgb(),
              alpha: stroke.opacity ?? 1,
            },

            defined: true,
          }
        }
        styles['border-style'] = {
          ...styles['border-style'],
          value: borderStyle,
          defined: true,
        }
      }

      if (
        node.topLeftRadius === node.topRightRadius &&
        node.topLeftRadius === node.bottomLeftRadius &&
        node.topLeftRadius === node.bottomRightRadius
      ) {
        if (node.topLeftRadius) {
          styles['border-radius'] = {
            ...styles['border-radius'],
            value: {
              topLeft: { ...styles['border-radius'].value.topLeft, value: node.topLeftRadius, defined: true },
              topRight: { ...styles['border-radius'].value.topLeft, value: node.topLeftRadius, defined: true },
              bottomLeft: { ...styles['border-radius'].value.topLeft, value: node.topLeftRadius, defined: true },
              bottomRight: { ...styles['border-radius'].value.topLeft, value: node.topLeftRadius, defined: true },
            },
            defined: true,
          }
        }
      } else {
        styles['border-radius'] = {
          ...styles['border-radius'],
          value: {
            topLeft: { ...styles['border-radius'].value.topLeft, value: node.topLeftRadius, defined: true },
            topRight: { ...styles['border-radius'].value.topRight, value: node.topRightRadius, defined: true },
            bottomLeft: { ...styles['border-radius'].value.topLeft, value: node.bottomLeftRadius, defined: true },
            bottomRight: { ...styles['border-radius'].value.bottomRight, value: node.bottomRightRadius, defined: true },
          },
          defined: true,
        }
      }
    }
  } catch (e) {
    throw e
  }

  return [
    {
      breakpoint: 'default',
      parentDefined,
      styles: [
        {
          label: 'Text',
          properties: text,
        },
        {
          label: 'Dimensions',
          properties: dimensions,
        },
        {
          label: 'Layout',
          properties: layout,
        },
        {
          label: 'Styles',
          properties: styles,
        },
        {
          label: 'Fill',
          properties: fills,
        },
        {
          label: 'Position',
          properties: position,
        },
      ],
    },
  ]
}

const color = {
  HEX: 'HEX',
  RGB: 'RGB',
  RGBA: 'RGBA',
  GRADIENT: 'GRADIENT',
}

const valueType = {
  NUMBER: 'NUMBER',
  STRING: 'STRING',
}

const usage = {
  TEXT: 'TEXT',
  NOTTEXT: 'NOTTEXT',
  ALL: 'ALL',
  FILL: 'FILL',
}

export const units = {
  PIXELS: 'px',
  PERCENT: '%',
  AUTO: 'auto',
  EM: 'em',
  REL: 'rel',
}
