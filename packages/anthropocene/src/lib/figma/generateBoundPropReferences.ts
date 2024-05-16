import { BoundProps } from "@configTypes/element/element"


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
        })
      })
    } else if (node.componentPropertyReferences) {
      Object.keys(node.componentPropertyReferences).forEach((key) => {
        if (key === 'characters') {
          boundProps.push({
            figmaPropType: key,
            figmaRef: node.componentPropertyReferences ? node.componentPropertyReferences[key] : null,
            name: node.componentPropertyReferences ? node.componentPropertyReferences[key]?.split('#')[0] : null,
            type: 'string',
          })
        }
      })
    }

    resolve(boundProps)
  })
}
