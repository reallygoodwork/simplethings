import { linearGradientPaintToHex, rgbaToHex, solidPaintToHex } from '../lib/stylelibs/tailwind/utils/rgbaToHex';

export function processStyles(
  node: any,
  parentLayout: BaseFrameMixin['layoutMode'] | undefined,
  groupTopLeft: { x: number; y: number } = { x: 0, y: 0 },
) {
  const styles: any = {
    width: node.width + 'px',
    height: node.height + 'px',
  }

  if (node.type === 'TEXT') {
    if (node.textAlignHorizontal !== 'LEFT') {
      styles['text-align'] = (() => {
        switch (node.textAlignHorizontal) {
          case 'CENTER':
            return 'center'
          case 'JUSTIFIED':
            return 'justify'
          case 'RIGHT':
            return 'right'
        }
      })()
    }
    if (node.textCase !== 'ORIGINAL') {
      styles['text-transform'] = (() => {
        switch (node.textCase) {
          case 'UPPER':
            return 'uppercase'
          case 'LOWER':
            return 'lowercase'
          case 'TITLE':
            return 'capitalize'
        }
      })()
    }
    if (node.textDecoration !== 'NONE') {
      styles['text-decoration'] = (() => {
        switch (node.textDecoration) {
          case 'UNDERLINE':
            return 'underline'
          case 'STRIKETHROUGH':
            return 'line-through'
        }
      })()
    }
    styles['font-size'] = node.getRangeFontSize(0, 1) + 'px'
    styles['font-family'] = node.getRangeFontName(0, 1).family
    styles['font-weight'] = node.fontWeight

    const fills = node.fills
    if (fills !== figma.mixed && fills?.length && fills[0].type === 'SOLID') {
      const textColor = rgbaToHex({
        ...fills[0].color,
        a: fills[0].opacity ?? 1,
      })
      styles['color'] = textColor
    }

    if (node.lineHeight !== figma.mixed && node.lineHeight.unit !== 'AUTO') {
      if (node.lineHeight.unit === 'PERCENT') {
        styles['line-height'] = `${parseFloat(node.lineHeight.value).toFixed(0)}%`
      } else {
        styles['line-height'] = `${parseFloat(node.lineHeight.value).toFixed(0)}px`
      }
    }

    if (node.letterSpacing.value !== 0) {
      if (node.letterSpacing.unit === 'PERCENT') {
        styles['letter-spacing'] = `${(parseFloat(node.letterSpacing.value) * 0.01).toFixed(2)}em`
      } else if (node.letterSpacing.unit === 'PIXELS') {
        styles['letter-spacing'] = `${parseFloat(node.letterSpacing.value).toFixed(2)}px`
      }
    }

    switch (node.textAutoResize) {
      case 'WIDTH_AND_HEIGHT':
        delete styles['width']
        delete styles['height']
        break
      case 'HEIGHT':
        styles['height'] = 'auto'
        break
      case 'NONE':
        delete styles['width']
        delete styles['height']
        break
    }
  }

  if (node.parent.type !== 'COMPONENT_SET' && node.type !== 'COMPONENT') {
    if (
      parentLayout === 'NONE' ||
      ('layoutPositioning' in node && node.layoutPositioning === 'ABSOLUTE' && node.parent.type !== 'COMPONENT_SET')
    ) {
      styles['position'] = 'absolute'
      styles['left'] = `${node.x - groupTopLeft.x}px`
      styles['top'] = `${node.y - groupTopLeft.y}px`
    } else if (node?.children?.length && node?.layoutMode === 'NONE') {
      styles['position'] = 'relative'
    }
  }

  if ('layoutGrow' in node) {
    if (parentLayout === 'VERTICAL') {
      if (node.layoutGrow) {
        styles['flex-grow'] = node.layoutGrow
        styles['height'] = 'auto'
      }
      if (node.layoutAlign === 'STRETCH') {
        styles['align-self'] = 'stretch'
        styles['width'] = 'auto'
      }
    } else if (parentLayout === 'HORIZONTAL') {
      if (node.layoutGrow) {
        styles['flex-grow'] = node.layoutGrow
        styles['width'] = 'auto'
      }
      if (node.layoutAlign === 'STRETCH') {
        styles['align-self'] = 'stretch'
        styles['height'] = 'auto'
      }
    }
  }

  if ('clipsContent' in node && node.clipsContent) {
    styles['overflow'] = 'hidden'
  }

  const fill = node.fills !== figma.mixed && node.fills?.length ? node.fills[0] : undefined

  let background = undefined
  switch (fill?.type) {
    case 'GRADIENT_LINEAR':
      background = `linear-gradient(${linearGradientPaintToHex(node.width, node.height, fill)})`
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
      styles['object-fit'] = fill.scaleMode === 'FILL' ? 'cover' : 'contain'
      break
    case 'SOLID':
      background = solidPaintToHex(fill)
      break
    default:
      break
  }

  if (background && node.type !== 'TEXT') {
    styles['background'] = background
  }

  if (node.type !== 'TEXT') {
    if (fill?.type !== 'IMAGE' && node.children) {
      styles['display'] = 'flex'
      if (node.layoutMode === 'VERTICAL' || node.type === 'COMPONENT_SET') {
        styles['flex-direction'] = 'column'
      }
      if (node.itemSpacing) {
        styles['gap'] = node.itemSpacing + 'px'
      }

      if (
        node.paddingTop === node.paddingRight &&
        node.paddingTop === node.paddingBottom &&
        node.paddingTop === node.paddingLeft
      ) {
        if (node.paddingTop) {
          styles['padding'] = node.paddingTop + 'px'
        }
      } else {
        styles['padding-top'] = node.paddingTop + 'px'
        styles['padding-bottom'] = node.paddingBottom + 'px'
        styles['padding-left'] = node.paddingLeft + 'px'
        styles['padding-right'] = node.paddingRight + 'px'
      }

      if (node.type === 'COMPONENT_SET' && node.layoutMode === 'NONE') {
        styles['justify-content'] = 'space-around'
        styles['align-items'] = 'center'
      } else {
        styles['justify-content'] = (() => {
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
        })()

        styles['align-items'] = (() => {
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
        })()
      }
    }
  }

  if (node.type !== 'TEXT') {
    const stroke = node.strokes?.length ? node.strokes[0] : undefined

    const borderColor = stroke?.type === 'SOLID' ? solidPaintToHex(stroke) : undefined
    const borderStyle = borderColor ? 'solid' : undefined

    if (borderStyle === 'solid') {
      if (
        node.strokeTopWeight === node.strokeBottomWeight &&
        node.strokeTopWeight === node.strokeLeftWeight &&
        node.strokeTopWeight === node.strokeRightWeight
      ) {
        if (node.strokeTopWeight) {
          styles['border-width'] = node.strokeTopWeight + 'px'
        }
      } else {
        if (node.strokeTopWeight) {
          styles['border-top-width'] = node.strokeTopWeight + 'px'
        }
        if (node.strokeBottomWeight) {
          styles['border-bottom-width'] = node.strokeBottomWeight + 'px'
        }
        if (node.strokeLeftWeight) {
          styles['border-left-width'] = node.strokeLeftWeight + 'px'
        }
        if (node.strokeRightWeight) {
          styles['border-right-width'] = node.strokeRightWeight + 'px'
        }
      }
      if (borderColor) {
        styles['border-color'] = borderColor
      }
      styles['border-style'] = borderStyle
    }

    if (
      node.topLeftRadius === node.topRightRadius &&
      node.topLeftRadius === node.bottomLeftRadius &&
      node.topLeftRadius === node.bottomRightRadius
    ) {
      if (node.topLeftRadius) {
        styles['border-radius'] = node.topLeftRadius + 'px'
      }
    } else {
      styles['border-radius'] = `${node.topLeftRadius || 0}px ${node.topRightRadius || 0}px ${
        node.bottomLeftRadius || 0
      }px ${node.bottomRightRadius || 0}px`
    }
  }

  return styles
}
