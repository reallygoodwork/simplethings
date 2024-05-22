import { BoundProps } from "../types/element"
import { camelize } from './utils'


export function generateBoundPropReferences(node: SceneNode) {
  return new Promise<BoundProps[]>((resolve, reject) => {
    const boundProps: BoundProps[] = []
    if (node.type === 'INSTANCE') {
      Object.keys(node.componentProperties).forEach((key) => {
        boundProps.push({
          figmaPropType: node.componentProperties[key]?.type,
          figmaRef: key,
          name: key.split('#')[0],
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
        }
      })
    }

    resolve(boundProps)
  })
}
