import { colord } from 'colord'

import { generateStyleConfig } from '../lib/generateStyleConfig'
import { generateStyleObject } from '../lib/generateStyleObject'
import { generateTailwindStyleString } from '../lib/generateTailwindStyleString'
import { color } from '../lib/stylelibs/tailwind/utils/tailwindColor'
import { ElementSchema } from '../types/element'
import { generateBoundPropReferences } from './generateBoundPropReferences'
import { generateComponentProps } from './generateComponentProps'
import { getCommonStyles } from './getCommonStyles'
import { removeCommonStyles } from './removeCommonStyles'
import { camelize } from './utils'
import { hasChildren } from '../utils/hasChildren'

function transformString(input: string): string {
  return input
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(/\s+/)
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join('')
    .replace(/^./, (str) => str.toUpperCase())
}

type StyleObject = {
  variantStyles: {
    [key: string]: string
  }
  tailwindStyles: string
}

async function generateVariantStyles(children: SceneNode[]): Promise<StyleObject[]> {
  return await Promise.all(
    children.map(async (child) => {
      const mainStyles = generateStyleConfig(child as any, {
        isRoot: true,
        isFirstChild: true,
        parentLayout: null,
        parentDefinedStyles: [],
        groupTopLeft: { x: 0, y: 0 },
      })

      return {
        variantStyles: generateStyleObject(mainStyles[0]),
        tailwindStyles: generateTailwindStyleString(mainStyles),
      }
    }),
  )
}

async function getComponentDependencies(firstChild: SceneNode, includeTypes?: boolean): Promise<any[]> {
  async function processNode(node: SceneNode): Promise<any[]> {
    const directComponents = ((node as any).children || [])
      .filter((child) => child.type === 'INSTANCE')
      .map((child) => ({
        name: `{ ${transformString(child.name)}${includeTypes ? `, type ${transformString(child.name)}Props` : '' } }`,
        packageName: `./${transformString(child.name).toLowerCase()}`,
      }))

    const childComponentsPromises = ((node as any).children || []).map((child) => processNode(child))
    const childComponents = await Promise.all(childComponentsPromises)

    // Flatten the array of arrays and combine with direct components
    return directComponents.concat(...childComponents)
  }

  const allComponents = await processNode(firstChild)

  return allComponents.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.packageName === value.packageName && t.name === value.name),
  )
}

function extractPropsFromChildName(childName: string): any[] {
  return childName.split(',').map((prop) => {
    const [name, value] = prop.split('=').map(camelize)
    return { name: name.trim(), value: value.trim() }
  })
}

function getChildrenVariantStyles(child: SceneNode[]): any[] {
  if (!child || !child.length) return []
  const childrenStyles = child
    .map((child) => ({
      name: transformString(child.name),
      isText: child.type === 'TEXT',
      styles: generateStyleConfig(child as any),
    }))
    .map((child) => {
      return {
        ...child,
        className: generateTailwindStyleString(child.styles),
        styles: generateStyleObject(child.styles[0]),
      }
    })

  return childrenStyles
}

function createVariant(child: SceneNode, commonStyles: any): any {
  const childStyles = generateStyleConfig(child)
  const childStylesObject = generateStyleObject(childStyles[0])
  const styles = removeCommonStyles(childStylesObject, commonStyles)
  const props = extractPropsFromChildName(child.name)

  return {
    figmaRef: child.name,
    name: child.name.split('=')[0],
    value: child.name.split('=')[1],
    styles,
    className: generateTailwindStyleString(childStyles).trim(),
    props,
    children: getChildrenVariantStyles((child as any).children as any),
  }
}

async function processChildren(children: SceneNode[], isIterable?: boolean): Promise<ElementSchema[]> {
  return await Promise.all(children.map((child) => generateSpec(child, isIterable)))
}

const getCommonTailwindClasses = (styles: StyleObject[]): string[] => {
  if (styles.length === 0) return []

  // Extract and split the tailwindStyles strings into arrays of classes
  const tailwindClassesArrays = styles.map((style) => style.tailwindStyles.trim().split(/\s+/))

  // Find the intersection of all class arrays
  const commonClasses = tailwindClassesArrays.reduce((acc, classes) => {
    return acc.filter((className) => classes.includes(className))
  })

  return commonClasses
}

const generateDefaultVariants = (defaultVariant: ComponentNode): VariantProperties => {
  return Object.entries(defaultVariant.variantProperties)
    .map(([key, value]) => {
      return {
        [camelize(key)]: camelize(value),
      }
    })
    .reduce((acc, obj) => {
      return { ...acc, ...obj }
    }, {})
}

const generateCVAVariants = (node: ComponentSetNode) => {
  const variants = node.componentPropertyDefinitions

  const variantConfig = Object.entries(variants)
    .filter(([key, value]) => value.type !== 'TEXT')
    .map(([key, value]) => {
      let options = {}

      if (value.type === 'BOOLEAN') {
        options = {
          true: '',
          false: '',
        }
      } else if (value.type === 'VARIANT') {
        options = value.variantOptions.reduce((acc, obj) => {
          return { ...acc, [camelize(obj)]: '' }
        }, {})
      }
      return {
        [camelize(key.split('#')[0])]: {
          ...options,
        },
      }
    })
    .reduce((acc, obj) => {
      return { ...acc, ...obj }
    }, {})

  return variantConfig
}

const generateCompoundVariants = (node: ComponentNode[]) => {
  const variants = node.map((variant) => {
    const variantName = generateDefaultVariants(variant as any)
    const childStyles = generateStyleConfig(variant)
    return {
      ...variantName,
      className: generateTailwindStyleString(childStyles),
    }
  })

  return variants
}

type ChildrenNode = Exclude<
  SceneNode,
  SliceNode | GroupNode | ConnectorNode | CodeBlockNode | WidgetNode | EmbedNode | LinkUnfurlNode | MediaNode
>
type VariantProperties = {
  [x: string]: string
}

const handleTextChild = async (child: TextNode) => {
  const textObject = {
    textValue: child.characters,
    textStyleClass: '',
  }

  if (child.textStyleId !== '') {
    const textStyleId = child.textStyleId
    const textStyles = await figma.getLocalTextStylesAsync()

    const textStyle = textStyles.find((textStyle) => textStyle.id === textStyleId)

    const fills = child.fills[0].color
    const alpha = child.fills[0].opacity ?? 1
    const hex = colord({ r: fills.r * 255, g: fills.g * 255, b: fills.b * 255, a: alpha }).toHex()

    const colorClass = color(hex)

    const aligned = child.textAlignHorizontal.toLowerCase()

    textObject['textStyleClass'] = textStyle.name + ' ' + `text${colorClass} text-${aligned}`
  }

  return textObject
}

const traverseChildren = async (
  children: ChildrenNode[],
  variantProperties?: VariantProperties,
): Promise<StyleObjectType[]> => {
  const childPromises = children.map(async (child) => {
    const childStyles = generateStyleConfig(child as any)
    const styles = generateStyleObject(childStyles[0])
    const hasBackgroundImage =
      typeof child.fills === 'object'
        ? (child?.fills as readonly Paint[])?.some((fill) => fill.type === 'IMAGE')
        : false

    const isComponent = child.type === 'COMPONENT' || child.type === 'INSTANCE'

    const boundProps = await generateBoundPropReferences(child)
    const boundPropsArray = boundProps.filter((value, index) => {
      const _value = JSON.stringify(value)
      return (
        index ===
        boundProps.findIndex((obj) => {
          return JSON.stringify(obj) === _value
        })
      )
    })

    const boundPropsArrayMap = Object.entries(child.componentPropertyReferences).map(([key, value]) => {
      return {
        figmaRef: key,
        name: camelize(value.split('#')[0]),
        value: value,
      }
    })

    if (child.name === 'image' || child.name === 'media') {
      boundPropsArrayMap.push({
        figmaRef: 'image',
        name: 'imageURI',
        value: 'imageURI',
      }, {
        figmaRef: 'string',
        name: 'imageAlt',
        value: 'Alt Text Missing',
      })
    }

    const object: StyleObjectType = {
      boundProps: boundPropsArrayMap,
      isComponent,
      name: isComponent ? transformString(child.name) : camelize(child.name),
      elementType: child.type === 'TEXT' ? 'p' : 'div',
      isText: child.type === 'TEXT',
      hasBackgroundImage,
      hasImage: child.name.includes('image') || child.name.includes('media'),
      styles,
      textStyleClass: '',
      className: generateTailwindStyleString(childStyles).trim(),
      componentProps: boundPropsArray,
    }

    if (variantProperties) {
      object['variantProperties'] = variantProperties
    }

    if (child.type === 'TEXT') {
      const textObject = await handleTextChild(child)
      object['textValue'] = textObject.textValue
      object['textStyleClass'] = textObject.textStyleClass

      if (child.textStyleId !== '') {
        const textStyleId = child.textStyleId
        const textStyles = await figma.getLocalTextStylesAsync()

        const textStyle = textStyles.find((textStyle) => textStyle.id === textStyleId)

        const fills = child.fills[0].color
        const alpha = child.fills[0].opacity ?? 1
        const hex = colord({ r: fills.r * 255, g: fills.g * 255, b: fills.b * 255, a: alpha }).toHex()

        const colorClass = color(hex)

        const aligned = child.textAlignHorizontal.toLowerCase()

        object['textStyleClass'] = textStyle.name + ' ' + `text${colorClass} text-${aligned}`
      }
    }

    if ((child as any).children && !isComponent) {
      object['children'] = await traverseChildren((child as any).children as ChildrenNode[], variantProperties)
    }

    return object
  })

  return Promise.all(childPromises)
}

type StyleObjectType = {
  name: string
  isText: boolean
  hasBackgroundImage: boolean
  styles: { [key: string]: any }
  className: string
  variantProperties?: { [key: string]: string }
  children?: StyleObjectType[]
  textValue?: string
  textStyleClass?: string
  elementType?: string
  boundProps?: any
  isComponent?: boolean
  componentProps?: any
  hasImage?: boolean
}

type StyleObjectTypeArray = StyleObjectType[][]

const processStyleObjectArrays = (styleObjectArrays: StyleObjectTypeArray) => {
  const maxLength = Math.max(...styleObjectArrays.map((arr) => arr.length))

  const aggregatedData: StyleObjectType[][] = Array.from({ length: maxLength }, () => [])

  const processStyleObject = (styleObject: StyleObjectType, index: number) => {
    aggregatedData[index].push(styleObject)

    if (styleObject.children) {
      const childAggregatedData = processStyleObjectArrays([styleObject.children])

      styleObject.children = childAggregatedData.map((childArray) => {
        return childArray.reduce((acc, child) => {
          acc.name = acc.name || child.name
          acc.isText = acc.isText || child.isText
          acc.hasBackgroundImage = acc.hasBackgroundImage || child.hasBackgroundImage
          acc.styles = { ...acc.styles, ...child.styles }
          acc.className = child.className
          acc.textValue = child.textValue
          acc.textStyleClass = child.textStyleClass
          acc.children = child.children
          acc.variantProperties = child.variantProperties
          acc.boundProps = child.boundProps
          acc.isComponent = child.isComponent
          acc.componentProps = child.componentProps
          acc.hasImage = child.hasImage
          return acc
        }, {} as StyleObjectType)
      })
    }
  }

  for (const styleObjectArray of styleObjectArrays) {
    styleObjectArray.forEach((styleObject, index) => {
      processStyleObject(styleObject, index)
    })
  }

  return aggregatedData
}

const generateVariantChildren = async (node: ComponentSetNode) => {
  const variantsPromises = node.children.map(async (variant: ComponentNode) => {
    const variantProperties = generateDefaultVariants(variant)
    return await traverseChildren(variant.children as ChildrenNode[], variantProperties)
  })

  return await Promise.all(variantsPromises)
}

type Variant = {
  name: string
  properties: VariantProperties
  styles: { [key: string]: any }
  className: string
  textStyleClass?: string
  boundProps?: any
  elementType?: string
  isText: boolean
  isComponent?: boolean
  componentProps?: any
  hasImage?: boolean
}

type ResultNode = {
  name: string
  elementType?: string
  variants: Variant[]
  children?: { [key: string]: ResultNode }
  isText: boolean
  hasBackgroundImage: boolean
  textValue?: string
  boundProps?: any
  isComponent?: boolean
  componentProps?: any
  hasImage?: boolean
}

function consolidateVariants(structure: StyleObjectType[][]): { [key: string]: ResultNode } {
  const result: { [key: string]: ResultNode } = {}

  function traverse(node: StyleObjectType, path: string) {
    if (!result[path]) {
      result[path] = {
        name: node.name,
        boundProps: node.boundProps,
        elementType: node.isText ? 'p' : 'div',
        isText: node.isText,
        isComponent: node.isComponent,
        hasBackgroundImage: node.hasBackgroundImage,
        textValue: node.textValue,
        variants: [],
        componentProps: node.componentProps,
        hasImage: node.hasImage,
      }
    }

    const variantProperties = node.variantProperties
    const existingVariant = result[path].variants.find(
      (v) => JSON.stringify(v.properties) === JSON.stringify(variantProperties),
    )

    if (existingVariant) {
      existingVariant.className += node.className
    } else {
      result[path].variants.push({
        name: node.name,
        elementType: node.isText ? 'p' : 'div',
        boundProps: node.boundProps,
        properties: variantProperties,
        styles: node.styles,
        isText: node.isText,
        isComponent: node.isComponent,
        className: node.className,
        textStyleClass: node.textStyleClass,
        componentProps: node.componentProps,
        hasImage: node.hasImage,
      })
    }

    if (node.children) {
      node.children.forEach((child) => {
        traverse(child, `${path}.${child.name}`)
      })
    }
  }

  structure.forEach((group) => {
    group.forEach((node) => {
      traverse(node, node.name)
    })
  })

  // Convert children objects into nested format
  function convertChildren(path: string, obj: ResultNode) {
    const childrenPaths = Object.keys(result).filter(
      (key) => key.startsWith(`${path}.`) && key.split('.').length === path.split('.').length + 1,
    )
    childrenPaths.forEach((childPath) => {
      const childKey = childPath.split('.').slice(-1)[0]
      if (!obj.children) obj.children = {}
      obj.children[childKey] = result[childPath]
      convertChildren(childPath, obj.children[childKey])
    })
  }

  const rootKeys = Array.from(new Set(structure.flat().map((node) => node.name)))
  const consolidatedResult: { [key: string]: ResultNode } = {}
  rootKeys.forEach((rootKey) => {
    consolidatedResult[rootKey] = result[rootKey]
    convertChildren(rootKey, consolidatedResult[rootKey])
  })

  return consolidatedResult
}



const generateChildrenList = async (node: ComponentSetNode) => {
  const variantChildren = await generateVariantChildren(node)
  return consolidateVariants(variantChildren)
}

// The main function that generates the spec
export const generateSpec = async (spec: SceneNode, isIterable?: boolean): Promise<ElementSchema | null> => {
  const name = transformString(spec.name)
  const updated = new Date().toISOString()
  const hasImage = spec.name.includes('image') || spec.name.includes('media')

  if (spec.type === 'COMPONENT_SET') {
    const children = spec.children as SceneNode[]
    const defaultVariant = spec.defaultVariant
    const data = await generateVariantStyles(children)
    const componentDependencies = await getComponentDependencies(defaultVariant)
    const commonStyles = getCommonStyles(data.map((d) => d.variantStyles))

    const variants = children.map((child) => createVariant(child, commonStyles))

    const descriptionBlock = spec.description.split('\n')
    const description = spec.description.split('\n---')[0]

    let configObject = {}
    let elementType = 'div'
    let typeScriptType = 'HTMLDivElement'

    descriptionBlock.forEach((desc) => {
      if (desc.includes('::sanity')) {
        configObject['sanity'] = desc.split('=').at(-1).trim() === 'true'
      } else if (desc.includes('::atomicComponent')) {
        configObject['atomicComponent'] = desc.split('=').at(-1).trim() === 'true'
      } else if (desc.includes('::elementType')) {
        elementType = desc.split('=').at(-1).trim()
      } else if (desc.includes('::typeScriptType')) {
        typeScriptType = desc.split('=').at(-1).trim()
      }
    })

    const componentPropsEl = await generateComponentProps(spec)
    const componentPropsArray = componentPropsEl.filter((value, index) => {
      const _value = JSON.stringify(value)
      return (
        index ===
        componentPropsEl.findIndex((obj) => {
          return JSON.stringify(obj) === _value
        })
      )
    })

    return {
      config: configObject,
      updated,
      name,
      dependencies: componentDependencies,
      description: description || 'To be added',
      isText: false,
      isComponent: true,
      elementAttributes: {},
      elementType,
      typeScriptType,
      styles: commonStyles,
      hasImage,
      className: getCommonTailwindClasses(data).join(' '),
      componentProps: componentPropsArray,
      children: await generateChildrenList(spec as any),
      variantOptions: generateCVAVariants(spec),
      defaultVariants: generateDefaultVariants(defaultVariant),
      compoundVariants: generateCompoundVariants(children as ComponentNode[]),
      variants,
    }
  }

  const isAListOfTheSameComponents = isAListOfComponents(spec)

  const childStyles = generateStyleConfig(spec as any)
  const styles = generateStyleObject(childStyles[0])
  const tailwindStyles = generateTailwindStyleString(childStyles)
  const boundProps = await generateBoundPropReferences(spec)
  const boundPropsArray = boundProps.filter((value, index) => {
    const _value = JSON.stringify(value)
    return (
      index ===
      boundProps.findIndex((obj) => {
        return JSON.stringify(obj) === _value
      })
    )
  })

  let children: any[] = []

  if (isAListOfTheSameComponents && hasChildren(spec)) {
    children = await processChildren([spec.children[0] as SceneNode], true)
  } else if (spec.type === 'GROUP' || spec.type === 'FRAME' || spec.type === 'COMPONENT') {
    children = await processChildren(spec.children as SceneNode[])
  }

  const childrenList = await Promise.all(children)

  const commonAttributes = {
    hasImage,
    isIterable: isIterable || false,
    updated,
    name,
    styles,
    className: tailwindStyles,
    isText: false,
    elementType: 'div',
    isComponent: false,
    componentProps: boundPropsArray,
    textStyleClass: '',
    boundProps: Object.entries(spec.componentPropertyReferences).map(([key, value]) => {
      return {
        figmaRef: key,
        name: camelize(value.split('#')[0].toLowerCase()),
        value: value,
      }
    }),
  }



  if (spec.type === 'TEXT') {
    const textObject = await handleTextChild(spec)
    commonAttributes['textStyleClass'] = textObject.textStyleClass

    if (spec.textStyleId !== '') {
      const textStyleId = spec.textStyleId
      const textStyles = await figma.getLocalTextStylesAsync()

      const textStyle = textStyles.find((textStyle) => textStyle.id === textStyleId)

      const fills = spec.fills[0].color
      const alpha = spec.fills[0].opacity ?? 1
      const hex = colord({ r: fills.r * 255, g: fills.g * 255, b: fills.b * 255, a: alpha }).toHex()

      const colorClass = color(hex)

      const aligned = spec.textAlignHorizontal.toLowerCase()

      commonAttributes['textStyleClass'] = textStyle.name + ' ' + `text${colorClass} text-${aligned}`
    }
  }

  const componentPropsEl = await generateComponentProps(spec)
  const componentPropsArray = componentPropsEl.filter((value, index) => {
    const _value = JSON.stringify(value)
    return (
      index ===
      componentPropsEl.findIndex((obj) => {
        return JSON.stringify(obj) === _value
      })
    )
  })

  switch (spec.type) {
    case 'TEXT':
      return {
        ...commonAttributes,
        textValue: spec.characters,
        elementType: 'p',
        isText: true,
      }
    case 'VECTOR':
    case 'ELLIPSE':
      return {
        ...commonAttributes,
        styles: {
          ...styles,
          width: styles.width || 'auto',
          height: styles.height || 'auto',
          borderRadius: '50%',
        },
      }
    case 'POLYGON':
    case 'RECTANGLE':
      return commonAttributes
    case 'GROUP':
    case 'FRAME':
      return {
        ...commonAttributes,
        children: childrenList,
      }
    case 'INSTANCE':
      if (spec.children.some((child) => child.name === 'image' || child.name === 'media')) {
        boundPropsArray.push({
          figmaRef: 'image',
          name: 'imageURI',
          value: 'imageURI',
        }, {
          figmaRef: 'string',
          name: 'imageAlt',
          value: 'Alt Text Missing',
        })
      }
      return {
        ...commonAttributes,
        name: transformString(spec.name),
        isComponent: true,
        elementAttributes: {},
        componentProps: boundPropsArray,
        iterable: isAListOfTheSameComponents,
      }
    case 'COMPONENT':
      const componentDependencies = await getComponentDependencies(spec, isAListOfTheSameComponents)
      let componentProps = componentPropsArray
      if (isAListOfTheSameComponents) {
        componentProps = [{
          figmaRef: camelize(transformString(spec.children[0].name)),
          name: `${camelize(transformString(spec.children[0].name))}s`,
          tsType: `${transformString(spec.children[0].name)}Props[]`,
          defaultValue: [],
          iterable: true,
        }]
      }
      return {
        ...commonAttributes,
        description: spec.description || 'To be added',
        isComponent: true,
        elementAttributes: {},
        componentProps,
        children: childrenList,
        dependencies: componentDependencies,
      }
    default:
      return null
  }
}


const isAListOfComponents = (node: SceneNode): boolean => {
  if (!hasChildren(node)) return false

  if (node.children.length === 0) return false
  if ((node.children as SceneNode[]).every((child) => child.type === 'INSTANCE')) {
    const id = node.children[0].id.split(':')[0]
    return node.children.every((child) => child.id.split(':')[0] === id)

  } else {
    return false
  }

}