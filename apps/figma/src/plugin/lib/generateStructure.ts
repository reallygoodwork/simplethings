import { colord } from 'colord'
import * as svgParser from 'svg-parser'
import { generateStyleConfig } from './generateStyleConfig'
import { generateStyleObject } from './generateStyleObject'
import { generateStyleString } from './generateStyleString'
import { generateTailwindStyleString } from './generateTailwindStyleString'
import { NodeStructure, SFNode } from './interfaces'

import { imageToDataURL } from './utils/imageToDataUrl'
import { normalizeName } from './utils/normalizeName'
import { processCharacters } from './utils/processCharacters'
import { returnValidElement } from './utils/returnValidElement'
import { VectorLikeNodeChecker } from './utils/VectorLikeNodeChecker'

interface generateStructureType {
  selection: SceneNode | SceneNode[]
  config?: {
    parentLayout: BaseFrameMixin['layoutMode'] | undefined
    groupTopLeft: Vector
  }
}

const vectorLikeNodeChecker = new VectorLikeNodeChecker()

function calculateCoordinates(node: SceneNode, isRoot = false, rootName: string) {
  let { x, y } = node
  const { width, height } = node

  if (isRoot) {
    x = 0
    y = 0
    // @ts-ignore
  } else if (node.parent.name !== rootName) {
    // @ts-ignore
    if (node.parent.paddingLeft === 0 && node.parent.x !== 0) {
      // @ts-ignore
      x += node.parent.x
    }

    // @ts-ignore
    if (node.parent.paddingTop === 0 && node.parent.y !== 0) {
      // @ts-ignore
      y += node.parent.y
    }
  }

  return {
    x: parseInt(x.toFixed(2)),
    y: parseInt(y.toFixed(2)),
    width: parseInt(width.toFixed(2)),
    height: parseInt(height.toFixed(2)),
  }
}

async function parseFigmaNode<generateStructureType>(
  selection: SceneNode,
  config?: {
    isRoot: boolean
    isFirstChild: boolean
    parentLayout: BaseFrameMixin['layoutMode'] | undefined
    groupTopLeft: Vector
    rootName: string
  },
): Promise<SFNode> {
  if (!selection.visible || ('isMask' in selection && selection.isMask)) {
    return
  }

  try {
    const node = {
      normalizedName: normalizeName(selection.name),
      originalName: selection.name,
      figmaType: selection.type,
      elementType: returnValidElement(selection),
      id: selection.id,
      children: [],
      isComponent: config.isRoot,
      isRootComponent: config.isRoot,
      styleConfig: {},
      style: [],
      initialLocation: calculateCoordinates(selection, config.isRoot, config.rootName),
      parent: {
        parentId: selection.parent.id,
        parentNormalizedName: normalizeName(selection.parent.name),
        parentOriginalName: selection.parent.name,
      },
    }

    // console.log('node', node)

    const styles = generateStyleConfig(selection as SceneNode & ChildrenMixin, {
      parentLayout: config?.parentLayout ? config.parentLayout : undefined,
      groupTopLeft: config?.groupTopLeft ? config.groupTopLeft : { x: 0, y: 0 },
      isFirstChild: config.isFirstChild,
      isRoot: config.isRoot,
      parentDefinedStyles: [],
    })

    node.style = [
      {
        breakpoint: styles[0].breakpoint,
        styleObject: generateStyleObject(styles[0]),
        styleString: generateStyleString(styles[0]),
        tailwindStyleString: generateTailwindStyleString(styles),
      },
    ]

    // Image Element
    if (selection.type === 'RECTANGLE' && selection.fills !== figma.mixed && selection.fills.length > 0) {
      const fill = selection.fills[0]
      if (fill.type === 'IMAGE' && fill.imageHash) {
        const image = figma.getImageByHash(fill.imageHash)
        const dataURL = image ? imageToDataURL(await image.getBytesAsync()) : null

        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Image',
          elementType: 'img',
          imageHeight: selection.height,

          dataURL,
          imageWidth: selection.width,
          children: [],
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          styleConfig: styles,
        }
      }
    }

    // SVG Element
    if (vectorLikeNodeChecker.check(selection) && selection.type !== 'COMPONENT_SET') {
      try {
        const svg = await selection.exportAsync({ format: 'SVG' })
        const svgText = String.fromCharCode(...svg)

        const root = svgParser.parse(svgText)
        const svgElem = root.children[0]

        if (svgElem.type !== 'element') {
          throw new Error('Expected element type')
        }

        const properties = { ...svgElem.properties }
        delete properties.xmlns

        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Image',
          elementType: 'svg',
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          properties: { ...svgElem.properties, ...svgElem },
          styleConfig: styles,
        }
      } catch (err) {
        const svg = await selection.exportAsync({ format: 'JPG' })
        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Image',
          elementType: 'img',
          imageHeight: selection.height,
          imageWidth: selection.width,
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          styleConfig: styles,
        }
      }
    }

    switch (selection.type) {
      case 'RECTANGLE':
        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Rectangle',
          elementType: 'div',
          children: [],
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          styleConfig: styles,
        }
      case 'TEXT':
        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Text',
          elementType: 'p',
          children: [],
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          content: processCharacters(selection.characters),
          styleConfig: styles,
        }

      case 'COMPONENT_SET': {
        const props = {}
        Object.entries(selection.variantGroupProperties).forEach(([key, val]) => {
          props[key] = val.values
        })

        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Group',
          elementType: 'div',
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          variantProperties: props as any,
          styleConfig: styles,
          children: await Promise.all(
            selection.children
              .filter((child) => child.visible && 'isMask' in child && !child.isMask)
              .map((child, idx) =>
                parseFigmaNode(child, {
                  isRoot: false,
                  isFirstChild: idx == 0,
                  parentLayout: selection.layoutMode,
                  groupTopLeft: selection.strokes.length
                    ? { x: selection.strokeLeftWeight, y: selection.strokeTopWeight }
                    : { x: 0, y: 0 },
                  rootName: config.rootName,
                }),
              ),
          ),
        }
      }
      case 'INSTANCE': {
        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Group',
          elementType: returnValidElement(selection),
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          styleConfig: styles,
          children: await Promise.all(
            selection.children
              .filter((child) => child.visible && 'isMask' in child && !child.isMask)
              .map((child, idx) =>
                parseFigmaNode(child, {
                  isRoot: false,
                  isFirstChild: idx == 0,
                  parentLayout: selection.layoutMode,
                  groupTopLeft: selection.strokes.length
                    ? { x: selection.strokeLeftWeight, y: selection.strokeTopWeight }
                    : { x: 0, y: 0 },
                  rootName: config.rootName,
                }),
              ),
          ),
        }
      }
      case 'COMPONENT': {
        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Group',
          elementType: returnValidElement(selection),
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          styleConfig: styles,
          children: await Promise.all(
            selection.children
              .filter((child) => child.visible && 'isMask' in child && !child.isMask)
              .map((child, idx) =>
                parseFigmaNode(child, {
                  isRoot: false,
                  isFirstChild: idx == 0,
                  parentLayout: selection.layoutMode,
                  groupTopLeft: selection.strokes.length
                    ? { x: selection.strokeLeftWeight, y: selection.strokeTopWeight }
                    : { x: 0, y: 0 },
                  rootName: config.rootName,
                }),
              ),
          ),
        }
      }

      case 'FRAME': {
        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Group',
          elementType: returnValidElement(selection),
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          styleConfig: styles,
          children: await Promise.all(
            selection.children
              .filter((child) => child.visible && 'isMask' in child && !child.isMask)
              .map((child, idx) =>
                parseFigmaNode(child, {
                  isRoot: false,
                  isFirstChild: idx == 0,
                  parentLayout: selection.layoutMode,
                  groupTopLeft: selection.strokes.length
                    ? { x: selection.strokeLeftWeight, y: selection.strokeTopWeight }
                    : { x: 0, y: 0 },
                  rootName: config.rootName,
                }),
              ),
          ),
        }
      }
      case 'GROUP': {
        const children = selection.children
          .filter((child) => child.visible && child)
          .filter((child, idx) => {
            if (
              child.type === 'RECTANGLE' &&
              child.width === selection.width &&
              child.height === selection.height &&
              child.x === selection.x &&
              child.y === selection.y
            ) {
              return false
            } else {
              return true
            }
          })

        children.sort((a, b) => {
          if (a.y < b.y) {
            return -1
          } else if (a.y > b.y) {
            return 1
          } else {
            if (a.x < b.x) {
              return -1
            } else if (a.x > b.x) {
              return 1
            } else {
              return 0
            }
          }
        })

        return {
          ...node,
          normalizedName:
            selection.name.length < 12 && selection.name.length > 3 ? normalizeName(selection.name) : 'Group',
          elementType: returnValidElement(selection),
          isComponent: config.isRoot,
          isRootComponent: config.isRoot,
          styleConfig: styles,
          children: await Promise.all(
            children
              .filter((child) => child.visible && 'isMask' in child && !child.isMask)
              .map((child, idx) =>
                parseFigmaNode(child, {
                  isRoot: false,
                  isFirstChild: idx == 0,
                  parentLayout: 'HORIZONTAL',
                  groupTopLeft: { x: selection.x, y: selection.y },
                  rootName: config.rootName,
                }),
              ),
          ),
        }
      }
      default:
        return
    }
  } catch (err) {
    console.log('error parsing node', selection)
    // errorReporter(err)
    console.error(err)
  }
}

async function captureFonts(selection: SceneNode, fonts: { family: string; style: any }[] = []) {
  if (selection.type === 'TEXT' && selection.visible) {
    if (selection.fontName !== figma.mixed) {
      // @ts-ignore
      if (fonts.find((font) => font.family === selection.fontName.family && font.style === selection.fontName.style)) {
        return fonts
      }
      fonts.push({
        family: selection.fontName.family,
        style: selection.fontWeight === figma.mixed ? 400 : selection.fontWeight,
      })
    }
  }

  if ('children' in selection) {
    for (const child of selection.children) {
      await captureFonts(child, fonts)
    }
  }

  return fonts
}

function extractHexColors(selection: SceneNode, colors: string[] = []) {
  if (selection.visible) {
    // @ts-ignore
    if (selection.fills?.length && selection.fills[0].type === 'GRADIENT_LINEAR') {
      // @ts-ignore
      selection.fills[0].gradientStops.forEach((stop) => {
        const hex = colord({
          r: stop.color.r * 255,
          g: stop.color.g * 255,
          b: stop.color.b * 255,
          a: stop.color.a,
        }).toHex()

        if (colors.indexOf(hex) === -1) {
          colors.push(hex)
        }
      })
      // @ts-ignore
    } else if (selection.fills?.length && selection.fills[0].type === 'SOLID') {
      // @ts-ignore
      const hex = colord({
        // @ts-ignore
        r: selection.fills[0].color.r * 255,
        // @ts-ignore
        g: selection.fills[0].color.g * 255,
        // @ts-ignore
        b: selection.fills[0].color.b * 255,
        // @ts-ignore
        a: selection.fills[0].opacity,
      }).toHex()

      if (colors.indexOf(hex) === -1) {
        colors.push(hex)
      }
    }
  }

  if ('children' in selection) {
    for (const child of selection.children) {
      extractHexColors(child, colors)
    }
  }

  return colors
}

function captureType(
  selection: SceneNode,
  type: {
    family: string
    weight: number
    lineHeight: any
    letterSpacing: string
    textDecoration: string
    size: any
  }[] = [],
) {
  if (selection.type === 'TEXT' && selection.visible) {
    if (selection.fontName !== figma.mixed) {
      // @ts-ignore
      if (
        type.find(
          (font) =>
            // @ts-ignore
            font.family === selection.fontName.family &&
            // @ts-ignore
            font.style === selection.fontName.style &&
            // @ts-ignore
            font.weight === selection.fontWeight &&
            font.size === selection.fontSize,
        )
      ) {
        return type
      }

      type.push({
        family: selection.fontName.family,
        // @ts-ignore
        lineHeight:
          // @ts-ignore
          selection.lineHeight.unit === 'AUTO'
            ? 'auto'
            : // @ts-ignore
            selection.lineHeight.unit === 'PIXELS'
            ? // @ts-ignore
              `${selection.lineHeight.value}px`
            : // @ts-ignore
              `${selection.lineHeight.value}em`,
        // @ts-ignore
        letterSpacing: selection.letterSpacing.unit
          ? // @ts-ignore
            selection.letterSpacing.unit === 'PIXELS'
            ? // @ts-ignore
              `${selection.letterSpacing.value}px`
            : // @ts-ignore
              `${selection.letterSpacing.value * 0.01}em`
          : '0px',
        // @ts-ignore
        textDecoration: selection.textDecoration,

        weight: selection.fontWeight === figma.mixed ? 400 : selection.fontWeight,
        size: selection.fontSize === figma.mixed ? '16px' : selection.fontSize + 'px',
      })
    }
  }

  if ('children' in selection) {
    for (const child of selection.children) {
      captureType(child, type)
    }
  }

  return type
}

async function generateStructure(selection: SceneNode): Promise<NodeStructure> {
  const fonts = await captureFonts(selection)
  const colors = extractHexColors(selection)
  const typography = captureType(selection)
  const markup = await parseFigmaNode(selection, {
    isRoot: true,
    isFirstChild: true,
    parentLayout: 'HORIZONTAL',
    groupTopLeft: { x: 0, y: 0 },
    rootName: selection.name,
  })

  return {
    typography,
    fonts,
    colors,
    markup,
  }
}

export default generateStructure
