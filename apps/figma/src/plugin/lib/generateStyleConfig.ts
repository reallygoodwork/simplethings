import { background } from './background'
import { borderColor, borderStyle, borderWidth } from './border'
import { borderRadius } from './borderRadius'
import { color } from './color'
import { fontFamily } from './fontFamily'
import { fontSize } from './fontSize'
import { fontStyle } from './fontStyle'
import { fontWeight } from './fontWeight'
import StyleConfig, { Styles } from './interfaces'
import { letterSpacing } from './letterSpacing'
import { lineHeight } from './lineHeight'
import { padding } from './padding'
import { textAlign } from './textAlign'
import { textDecoration } from './textDecoration'
import { textTransform } from './textTransform'

interface StyleConfigInterface {
  parentLayout: BaseFrameMixin['layoutMode'] | undefined
  groupTopLeft: Vector
  isFirstChild: boolean
  isRoot: boolean
  parentDefinedStyles: []
}

function getBoundaries(node: SceneNode) {
  return {
    x: node.x,
    y: node.y,
    width: node.width,
    height: node.height,
    bounds: {
      topLeft: parseInt(Math.abs(node.x).toFixed(0)),
      topCenter: parseInt(Math.abs(node.x + node.width / 2).toFixed(0)),
      topRight: parseInt(Math.abs(node.x + node.width).toFixed(0)),
      bottomLeft: parseInt(Math.abs(node.y + node.height).toFixed(0)),
      bottomRight: parseInt(Math.abs(node.y + (node.x + node.width)).toFixed(0)),
      leftCenter: parseInt(Math.abs(node.y + node.height / 2).toFixed(0)),
      rightCenter: parseInt(Math.abs(node.x + node.width + (node.y + node.height / 2)).toFixed(0)),
      bottomCenter: parseInt(Math.abs(node.x + node.width / 2 + (node.y + node.height)).toFixed(0)),
      center: parseInt(Math.abs(node.x + node.width / 2 + (node.y + node.height / 2)).toFixed(0)),
    },
  }
}

export function generateStyleConfig(
  node: any,
  config: StyleConfigInterface = {
    parentLayout: undefined,
    groupTopLeft: { x: 0, y: 0 },
    isFirstChild: false,
    isRoot: false,
    parentDefinedStyles: [],
  },
): Styles[] {
  const styleConfig = { ...StyleConfig }
  const definedOnParent = []


  const hasChildren = node.type !== 'TEXT' && node?.children && node?.children?.length > 0
  try {
    // Generate Parent Defined Styles that will be inherited by Text children
    // if (hasChildren && node.children.filter((child) => child.type === 'TEXT')?.length) {
    //   // Text Alignigment
    //   if (findChildStyles(node.children, 'textAlignHorizontal', 'LEFT')) {
    //     definedOnParent.push('textAlign')
    //     styleConfig.textAlign = textAlign(styleConfig.textAlign, node.children[0], true)
    //   }

    //   // Text Decoration
    //   if (findChildStyles(node.children, 'textDecoration')) {
    //     definedOnParent.push('textDecoration')
    //     styleConfig.textDecoration = textDecoration(styleConfig.textAlign, node.children[0], true)
    //   }

    //   // Text Transform
    //   if (findChildStyles(node.children, 'textCase')) {
    //     definedOnParent.push('textTransform')
    //     styleConfig.textTransform = textTransform(styleConfig.textAlign, node.children[0], true)
    //   }

    //   // Letter Spacing
    //   if (findChildStyles(node.children, 'letterSpacing')) {
    //     definedOnParent.push('letterSpacing')
    //     styleConfig.letterSpacing = letterSpacing(styleConfig.letterSpacing, node.children[0], true)
    //   }

    //   // Line Height
    //   if (findChildStyles(node.children, 'lineHeight')) {
    //     definedOnParent.push('lineHeight')
    //     styleConfig.lineHeight = lineHeight(styleConfig.lineHeight, node.children[0], true)
    //   }

    //   // Font Size
    //   if (findChildStyles(node.children, 'fontSize')) {
    //     definedOnParent.push('fontSize')
    //     styleConfig.fontSize = fontSize(styleConfig.fontSize, node.children[0], true)
    //   }

    //   // Font Family
    //   if (findChildStyles(node.children, 'fontFamily')) {
    //     definedOnParent.push('fontFamily')
    //     styleConfig.fontFamily = fontFamily(styleConfig.fontFamily, node.children[0] as any, true)
    //   }

    //   // Font Weight
    //   if (findChildStyles(node.children, 'fontWeight')) {
    //     definedOnParent.push('fontWeight')
    //     styleConfig.fontWeight = fontWeight(styleConfig.fontWeight, node.children[0], true)
    //   }

    //   // Font Style
    //   if (findChildStyles(node.children, 'fontStyle')) {
    //     definedOnParent.push('fontStyle')
    //     styleConfig.fontStyle = fontStyle(styleConfig.fontStyle, node.children[0] as any, true)
    //   }

    //   // Color
    //   if (findChildStyles(node.children, 'color')) {
    //     definedOnParent.push('color')
    //     styleConfig.color = color(styleConfig.color, node.children[0] as any, true)
    //   }
    // }

    if (node.type === 'RECTANGLE') {
      if (!node.children) {
        styleConfig.background = background(styleConfig.background, node)
        styleConfig['width'] = {
          ...styleConfig['width'],
          value: node.width.toFixed(0),
          unit: 'px',
          defined: true,
        }
        styleConfig['height'] = {
          ...styleConfig['height'],
          value: node.height.toFixed(0),
          unit: 'px',
          defined: true,
        }
      }
    }

    if (node.type === 'GROUP') {
      const bounds = node.absoluteBoundingBox
      const rectangles = node.children.filter((child) => {
        if (
          child.type === 'RECTANGLE' &&
          child.width === node.width &&
          child.height === node.height &&
          child.x === node.x &&
          child.y === node.y
        ) {
          return true
        }
      })

      const leftToRight = node.children
        .filter((child) => child?.id !== rectangles[0]?.id)
        .sort((a, b) => {
          if (a.x + a.width > b.x + b.width) {
            return 1
          }
          if (a.x + a.width < b.x + b.width) {
            return -1
          }
          return 0
        })

      const topToBottom = node.children
        .filter((child) => child?.id !== rectangles[0]?.id)
        .sort((a, b) => {
          if (a.y + a.height > b.y + b.height) {
            return -1
          }
          if (a.y + a.height < b.y + b.height) {
            return 1
          }
          return 0
        })

      if (rectangles.length > 0 && leftToRight.length > 0 && topToBottom.length > 0) {
        // Padding
        const isSquare = node.width === node.height
        const top = parseInt(Math.abs(node.y - topToBottom[0].y || 0).toFixed(0))
        const bottom = parseInt(Math.abs((node.height - topToBottom[0].height) / 2).toFixed(0))
        const left = parseInt(Math.abs(leftToRight[0].x - node.x).toFixed(0))
        const right = parseInt(Math.abs(bounds.width % leftToRight[leftToRight.length - 1].width).toFixed(0))
        styleConfig.padding = {
          ...styleConfig.padding,
          defined: true,
          value: {
            ...styleConfig.padding.value,
            top: {
              ...styleConfig.padding.value.top,
              value: parseInt(Math.abs(node.y - topToBottom[0].y || 0).toFixed(0)),
              unit: 'px',
              defined: true,
            },
            bottom: {
              ...styleConfig.padding.value.bottom,
              value: isSquare ? top : bottom,
              unit: 'px',
              defined: true,
            },
            left: {
              ...styleConfig.padding.value.left,
              value: isSquare ? top : left,
              unit: 'px',
              defined: true,
            },
            right: {
              ...styleConfig.padding.value.right,
              value: isSquare ? top : right,
              unit: 'px',
              defined: true,
            },
          },
        }

        // Align Items
        const isHorizontallyCentered =
          (topToBottom[0].y || 0 + Math.abs(topToBottom[0].height / 2)).toFixed(0) ===
          (topToBottom[topToBottom.length - 1].y + Math.abs(topToBottom[topToBottom.length - 1].height / 2)).toFixed(0)

        const isVerticallyCentered =
          (leftToRight[0].x || 0 + Math.abs(leftToRight[0].width / 2)).toFixed(0) ===
          (leftToRight[leftToRight.length - 1].x + Math.abs(leftToRight[leftToRight.length - 1].width / 2)).toFixed(0)

        const topItem = getBoundaries(topToBottom[0])
        const bottomItem = getBoundaries(topToBottom[topToBottom.length - 1])
        const leftItem = getBoundaries(leftToRight[0])
        const rightItem = getBoundaries(leftToRight[leftToRight.length - 1])

        if (
          bottomItem.bounds.topLeft > topItem.bounds.topLeft &&
          bottomItem.bounds.topRight < topItem.bounds.topRight
        ) {
          styleConfig.flexDirection = {
            ...styleConfig.flexDirection,
            value: 'column',
            defined: true,
          }
        }

        if (leftItem.bounds.center === rightItem.bounds.center) {
          styleConfig.justifyContent = {
            ...styleConfig.justifyContent,
            value: 'center',
            defined: true,
          }
        }

        if (isHorizontallyCentered) {
          styleConfig.alignItems = {
            ...styleConfig.alignItems,
            value: 'center',
            defined: true,
          }
        }

        if (leftToRight.length === 2) {
          styleConfig.gap = {
            ...styleConfig.gap,
            value: Math.abs(leftToRight[0].x + leftToRight[0].width - leftToRight[1].x),
            unit: 'px',
            defined: true,
          }
        }

        styleConfig['display'] = {
          ...styleConfig['display'],
          value: 'flex',
          defined: true,
        }
        styleConfig.background = background(styleConfig.background, rectangles[0] as any)
        styleConfig.borderWidth = borderWidth(styleConfig.borderWidth, rectangles[0] as any)
        styleConfig.borderColor = borderColor(styleConfig.borderColor, rectangles[0] as any)
        styleConfig.borderStyle = borderStyle(styleConfig.borderStyle, rectangles[0] as any)
        styleConfig.borderRadius = borderRadius(styleConfig.borderRadius, rectangles[0] as any)
      }
    }

    if (node.type === 'TEXT') {
      styleConfig.textAlign = textAlign(styleConfig.textAlign, node)
      styleConfig.textDecoration = textDecoration(styleConfig.textDecoration, node)
      styleConfig.textTransform = textTransform(styleConfig.textTransform, node)
      styleConfig.letterSpacing = letterSpacing(styleConfig.letterSpacing, node)
      styleConfig.lineHeight = lineHeight(styleConfig.lineHeight, node)
      styleConfig.fontSize = fontSize(styleConfig.fontSize, node)
      styleConfig.fontFamily = fontFamily(styleConfig.fontFamily, node)
      styleConfig.fontWeight = fontWeight(styleConfig.fontWeight, node)
      styleConfig.fontStyle = fontStyle(styleConfig.fontStyle, node)
      styleConfig.color = color(styleConfig.color, node)

      if (node.layoutSizingHorizontal === 'FIXED') {
        styleConfig['width'] = {
          ...styleConfig['width'],
          value: node.width.toFixed(0),
          unit: 'px',
          defined: true,
        }
      }

      switch (node.textAutoResize) {
        case 'HEIGHT':
          styleConfig['height'] = {
            ...styleConfig['height'],
            value: 'auto',
            unit: 'auto',
            defined: true,
          }
          break
        case 'TRUNCATE':
          styleConfig['text-overflow'] = {
            ...styleConfig['text-overflow'],
            value: 'ellipsis',
            defined: true,
          }
      }
    }

    styleConfig.borderRadius = borderRadius(styleConfig.borderRadius, node)

    if ((node.type !== 'FRAME' && node.type !== 'INSTANCE') || (node.type === 'FRAME' && node.layoutMode === 'NONE')) {
      if (node['primaryAxisSizingMode'] === 'FIXED') {
        styleConfig['height'] = {
          ...styleConfig['height'],
          value: node.height.toFixed(0),
          unit: 'px',
          defined: true,
        }
      }

      if (node['counterAxisSizingMode'] === 'FIXED') {
        styleConfig['width'] = {
          ...styleConfig['width'],
          value: node.width.toFixed(0),
          unit: 'px',
          defined: true,
        }
      } else if (
        !config.isRoot &&
        config.parentLayout !== 'NONE' &&
        node['counterAxisSizingMode'] === 'AUTO' &&
        node['layoutAlign'] !== 'STRETCH' &&
        node['layoutPositioning'] !== 'ABSOLUTE' &&
        node['layoutSizingHorizontal'] !== 'FIXED' &&
        node['layoutSizingHorizontal'] !== 'HUG'
      ) {
        styleConfig['width'] = {
          ...styleConfig['width'],
          value: 100,
          unit: '%',
          defined: true,
        }
      }
    }

    if ('fills' in node && node.fills && node.type !== 'TEXT') {
      styleConfig.background = background(styleConfig.background, node)
      const fill = node.fills !== figma.mixed && node.fills?.length > 0 ? node.fills[0] : null
      if (fill?.type === 'IMAGE') {
        styleConfig['object-fit'] = {
          ...styleConfig['object-fit'],
          value: fill.scaleMode === 'FILL' ? 'cover' : 'contain',
          defined: true,
        }
      }
    }

    if ('layoutGrow' in node) {
      if (config.parentLayout === 'VERTICAL') {
        if (node.layoutGrow) {
          styleConfig['flex-grow'] = {
            ...styleConfig['flex-grow'],
            value: node.layoutGrow,
            defined: true,
          }

          styleConfig['height'] = {
            ...styleConfig['height'],
            value: 'auto',
            unit: 'auto',
            defined: true,
          }
        }

        if (node.layoutAlign === 'STRETCH') {
          styleConfig['align-self'] = {
            ...styleConfig['align-self'],
            value: 'stretch',
            defined: true,
          }

          styleConfig['width'] = {
            ...styleConfig['width'],
            value: 'auto',
            unit: 'auto',
            defined: true,
          }
        }
      } else if (config.parentLayout === 'HORIZONTAL') {
        if (node.layoutGrow) {
          styleConfig['flex-grow'] = {
            ...styleConfig['flex-grow'],
            value: node.layoutGrow,
            defined: true,
          }

          styleConfig['width'] = {
            ...styleConfig['width'],
            value: 'auto',
            unit: 'auto',
            defined: true,
          }
        }

        if (node.layoutAlign === 'STRETCH') {
          styleConfig['align-self'] = {
            ...styleConfig['align-self'],
            value: 'stretch',
            defined: true,
          }

          styleConfig['height'] = {
            ...styleConfig['height'],
            value: 'auto',
            unit: 'auto',
            defined: true,
          }
        }
      }
    }

    if ('clipsContent' in node && node.clipsContent) {
      styleConfig['overflow'] = {
        ...styleConfig['overflow'],
        value: 'hidden',
        defined: true,
      }
    }

    // Handle Nested Children and Contextual Layout
    if (node.type !== 'GROUP' && node.type !== 'TEXT') {
      if ('layoutMode' in node && node.children.length >= 2 && node.layoutMode !== 'NONE') {
        styleConfig['display'] = {
          ...styleConfig['display'],
          value: 'flex',
          defined: true,
        }

        if (('layoutMode' in node && node.layoutMode === 'VERTICAL') || node.type === 'COMPONENT_SET') {
          styleConfig.flexDirection = {
            ...styleConfig.flexDirection,
            value: 'column',
            defined: true,
          }
        }

        if ('itemSpacing' in node && node.itemSpacing && node.children.length > 1) {
          styleConfig.gap = {
            ...styleConfig.gap,
            value: node.itemSpacing,
            defined: true,
          }
        }
      }
    }

    if (
      node.parent.type !== 'GROUP' &&
      node.parent.type !== 'COMPONENT_SET' &&
      node.type !== 'COMPONENT' &&
      node.type !== 'TEXT'
    ) {
      if (
        (!config.isRoot && !config.isFirstChild && config.parentLayout === 'NONE') ||
        ('layoutPositioning' in node &&
          node.layoutPositioning === 'ABSOLUTE' &&
          (node.parent.type as any) !== 'COMPONENT_SET')
      ) {
        styleConfig['position'] = {
          ...styleConfig['position'],
          value: 'absolute',
          defined: true,
        }

        styleConfig['top'] = {
          ...styleConfig['top'],
          value: Math.round(node.y - config.groupTopLeft.y),
          unit: 'px',
          defined: true,
        }

        styleConfig['left'] = {
          ...styleConfig['left'],
          value: Math.round(node.x - config.groupTopLeft.x),
          unit: 'px',
          defined: true,
        }
        // @ts-ignore
      } else if (node?.children?.length && node?.layoutMode === 'NONE') {
        styleConfig['position'] = {
          ...styleConfig['position'],
          value: 'relative',
          defined: true,
        }
      }
    }

    // @ts-ignore
    if (node?.children?.length >= 2 && node?.layoutMode !== 'NONE') {
      // @ts-ignore
      if (node.type === 'COMPONENT_SET' && node.layoutMode === 'NONE') {
        styleConfig.justifyContent = {
          ...styleConfig.justifyContent,
          value: 'space-around',
          defined: true,
        }
        styleConfig.alignItems = {
          ...styleConfig.alignItems,
          value: 'center',
          defined: true,
        }
      } else {
        // @ts-ignore
        if (node.primaryAxisAlignItems) {
          styleConfig.justifyContent = {
            ...styleConfig.justifyContent,
            value: (() => {
              // @ts-ignore
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

        // @ts-ignore
        if (node.counterAxisAlignItems) {
          styleConfig.alignItems = {
            ...styleConfig.alignItems,
            value: (() => {
              // @ts-ignore
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

    if ('paddingTop' in node) {
      styleConfig.padding = padding(styleConfig.padding, node)
    }

    // Handle Border
    // @ts-ignore
    const stroke = node?.strokes !== figma.mixed && node.strokes?.length > 0 ? node.strokes[0] : null
    if (stroke) {
      if ('strokeTopWeight' in node) {
        styleConfig.borderWidth = borderWidth(styleConfig.borderWidth, node)
        styleConfig.borderColor = borderColor(styleConfig.borderColor, node)
        styleConfig.borderStyle = borderStyle(styleConfig.borderStyle, node)
      }
    }

    if (node.type === 'COMPONENT_SET' && node.children.length) {
      styleConfig['display'] = {
        ...styleConfig['display'],
        value: 'flex',
        defined: true,
      }

      styleConfig.flexDirection = {
        ...styleConfig.flexDirection,
        value: 'column',
        defined: true,
      }

      styleConfig.alignItems = {
        ...styleConfig.alignItems,
        value: 'flex-start',
        defined: true,
      }

      styleConfig.gap = {
        ...styleConfig.gap,
        value: node.itemSpacing || 20,
        defined: true,
      }

      styleConfig.padding = {
        ...styleConfig.padding,
        defined: true,
        value: {
          top: {
            ...styleConfig.padding.value.top,
            value: 20,
            defined: true,
          },
          bottom: {
            ...styleConfig.padding.value.bottom,
            value: 20,
            defined: true,
          },
          left: {
            ...styleConfig.padding.value.left,
            value: 20,
            defined: true,
          },
          right: {
            ...styleConfig.padding.value.right,
            value: 20,
            defined: true,
          },
        },
      }
    }

    if ('maxWidth' in node && node.layoutMode !== 'FIXED' && node.type !== 'TEXT' && node.maxWidth) {
      styleConfig['maxWidth'] = {
        ...styleConfig['maxWidth'],
        value: node.maxWidth,
        unit: 'px',
        defined: true,
      }
    }

  } catch (error) {
    console.error(error)
    throw error
  }

  return [
    {
      ...styleConfig,
      breakpoint: 1280,
    },
  ]
}
