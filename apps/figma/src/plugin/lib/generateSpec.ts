import { generateStyles } from "./generateStyles";
import { getCommonStyles } from "./getCommonStyles";
import { removeCommonStyles } from "./removeCommonStyles";
import { generateComponentProps } from "./generateComponentProps";
import { generateBoundPropReferences } from "./generateBoundPropReferences";
import { camelize } from './utils'

export const generateSpec = async (spec: SceneNode): Promise<any | null> => {

  const name = camelize(spec.name)

  if (spec.type === 'COMPONENT_SET') {
    const children = spec.children
    const variantStyles = children.map(async (child) => await generateStyles(child))
    const commonStyles = getCommonStyles(variantStyles)

    const variants = children.map((child) => {
      const childStyles = generateStyles(child)
      const styles = removeCommonStyles(childStyles, commonStyles)
      return {
        figmaRef: child.name,
        name: child.name.split('=')[0],
        value: child.name.split('=')[1],
        styles,
      }
    })

    const hasChildren = children && children.length > 0
    const componentChildren = children[0] as any

    return {
      name,
      dependencies: [],
      isText: false,
      isComponent: true,
      elementAttributes: {},
      elementType: 'div',
      styles: commonStyles,
      componentProps: generateComponentProps(spec),
      children: hasChildren ? componentChildren.children.map((child: SceneNode) => generateSpec(child)) : [],
      variants
    }
  }

  const styles = await generateStyles(spec)
  const boundProps = await generateBoundPropReferences(spec)
  let children: any[] = []
  if (spec.type === 'GROUP' || spec.type === 'FRAME' || spec.type === 'INSTANCE' || spec.type === 'COMPONENT') {
    children = spec.children.map(async (child) => await generateSpec(child))
  }
  switch (spec.type) {
    case 'TEXT':
      return {
        name,
        styles,
        boundProps,
        isText: true,
        elementType: 'p',
        isComponent: false,
        elementAttributes: {},
        componentProps: [],
      }
    case 'VECTOR':
    case 'ELLIPSE':
    case 'POLYGON':
    case 'RECTANGLE':
      return {
        name,
        styles,
        boundProps,
        isText: false,
        elementType: 'div',
        isComponent: false,
        componentProps: [],
      }
    case 'GROUP':
    case 'FRAME':
      return {
        name,
        styles,
        boundProps,
        isText: false,
        elementType: 'div',
        isComponent: false,
        children,
        componentProps: [],
      }
    case 'INSTANCE':
      return {
        name,
        styles,
        boundProps,
        isText: false,
        elementType: 'div',
        isComponent: true,
        elementAttributes: {},
        componentProps: generateComponentProps(spec),
        children
      }
    case 'COMPONENT':
      return {
        name,
        styles,
        boundProps,
        isText: false,
        elementType: 'div',
        isComponent: true,
        elementAttributes: {},
        componentProps: generateComponentProps(spec),
        children
      }
    default:
      return null
  }


}