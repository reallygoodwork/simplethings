import { camelize } from './utils'

export function generateComponentProps(node: SceneNode) {
  const hasProperties = node.parent?.type === 'PAGE' && node.type === 'COMPONENT' || node.type === 'COMPONENT_SET'

  const componentProps = hasProperties && node.componentPropertyDefinitions ? Object.keys(node.componentPropertyDefinitions).map((key) => {
    const prop = node.componentPropertyDefinitions[key]
    // if (prop) {
      return {
        figmaRef: key,
        name: camelize(key.split('#')[0].toLowerCase()),
        tsType: prop?.type === 'TEXT' || prop?.type === 'VARIANT' ? 'string' : 'boolean',
        defaultValue: prop?.defaultValue,
        options: prop?.variantOptions,
      }

  }) : []

  return componentProps
}