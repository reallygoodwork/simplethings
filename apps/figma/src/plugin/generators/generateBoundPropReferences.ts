import { BoundProps } from "../types/element"
import { camelize } from './utils'


export function generateBoundPropReferences(node: SceneNode) {
  return new Promise<BoundProps[]>((resolve, reject) => {


    const boundProps: BoundProps[] = []
    if (node.type === 'COMPONENT') {
      node.children.forEach((child) => {
        if (child.type === 'INSTANCE') {
          Object.keys(child.componentProperties).forEach((key) => {
            boundProps.push({
              figmaPropType: child.componentProperties[key]?.type,
              figmaRef: key,
              name: camelize(key.split('#')[0].toLowerCase()),
              type: 'string',
              value: child.componentProperties[key]?.value,
            })
          })
        }
      })

      Object.keys(node.componentPropertyReferences).forEach((key) => {
        if (key === 'characters') {
          boundProps.push({
            figmaPropType: key,
            figmaRef: node.componentPropertyReferences ? node.componentPropertyReferences[key] : null,
            name: node.componentPropertyReferences ? camelize(node.componentPropertyReferences[key]?.split('#')[0].trim()) : null,
            type: 'string',
          })
        } else if (key === 'visible') {
          boundProps.push({
            figmaPropType: key,
            figmaRef: node.componentPropertyReferences ? node.componentPropertyReferences[key] : null,
            name: node.componentPropertyReferences ? camelize(node.componentPropertyReferences[key]?.split('#')[0].trim()) : null,
            type: 'boolean',
          })
        }
      })


    } else if (node.type === 'INSTANCE') {
      Object.keys(node.componentProperties).forEach((key) => {
        boundProps.push({
          figmaPropType: node.componentProperties[key]?.type,
          figmaRef: key,
          name: camelize(key.split('#')[0].toLowerCase()),
          type: 'string',
          value: node.componentProperties[key]?.value,
        })
      })
    } else if (node.componentPropertyReferences) {
      Object.keys(node.componentPropertyReferences).forEach((key) => {
        if (key === 'characters') {
          boundProps.push({
            figmaPropType: key,
            figmaRef: node.componentPropertyReferences ? node.componentPropertyReferences[key] : null,
            name: node.componentPropertyReferences ? camelize(node.componentPropertyReferences[key]?.split('#')[0].trim()) : null,
            type: 'string',
          })
        } else if (key === 'visible') {
          boundProps.push({
            figmaPropType: key,
            figmaRef: node.componentPropertyReferences ? node.componentPropertyReferences[key] : null,
            name: node.componentPropertyReferences ? camelize(node.componentPropertyReferences[key]?.split('#')[0].trim()) : null,
            type: 'boolean',
          })
        }
      })
    }

    if (node.name === 'image' || node.name === 'media') {
      boundProps.push({
        figmaPropType: 'image',
        figmaRef: 'image',
        name: 'imageURI',
        type: 'string',
      }, {
        figmaPropType: 'string',
        figmaRef: 'string',
        name: 'imageAlt',
        type: 'string',
      })
    }

    resolve(boundProps)
  })
}
