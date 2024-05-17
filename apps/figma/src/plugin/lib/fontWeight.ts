import { Styles } from './interfaces'

/**
 * @param fontWeightConfig - The fontWeight config object
 * @param node - The node to get the fontWeight from
 * @param inherited - Whether the fontWeight is inherited from a parent node
 * @returns The fontWeight config object
 * */
export function fontWeight(
  fontWeightConfig: Styles['fontWeight'],
  node: SceneNode,
  inherited = false,
): Styles['fontWeight'] {
  if (node['fontWeight'] !== figma.mixed) {
    return {
      ...fontWeightConfig,
      value: node['fontWeight'],
      hasChildStyles: inherited,
      defined: true,
    }
  } else {
    return fontWeightConfig
  }
}
