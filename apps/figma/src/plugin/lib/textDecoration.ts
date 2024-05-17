import { Styles } from './interfaces'

/**
 * @param textDecorationConfig - The textDecoration config object
 * @param node - The node to get the textDecoration from
 * @param inherited - Whether the textDecoration is inherited from a parent node
 * @returns The textDecoration config object
 * */
export function textDecoration(
  textDecorationConfig: Styles['textDecoration'],
  node: SceneNode,
  inherited = false,
): Styles['textDecoration'] {
  if (node['textDecoration'] === 'NONE') {
    return textDecorationConfig
  }

  return {
    ...textDecorationConfig,
    value: (() => {
      switch (node['textDecoration']) {
        case 'UNDERLINE':
          return 'underline'
        case 'STRIKETHROUGH':
          return 'line-through'
      }
    })(),
    hasChildStyles: inherited,
    defined: true,
  }
}
