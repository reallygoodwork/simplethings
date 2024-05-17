import { Styles } from './interfaces'

/**
 * Generates a style config object CSS Text Alignment
 *
 * @param textAlignConfig - The textAlign config object
 * @param  node - The node to get the textAlign from
 * @param inherited - Whether the textAlign is inherited from a parent node
 * @returns  The textAlign config object
 */
export function textAlign(
  textAlignConfig: Styles['textAlign'],
  node: SceneNode,
  inherited = false,
): Styles['textAlign'] {
  if (node['textAlignHorizontal'] === 'LEFT') {
    return textAlignConfig
  }

  return {
    ...textAlignConfig,
    value: (() => {
      switch (node['textAlignHorizontal']) {
        case 'CENTER':
          return 'CENTER'
        case 'JUSTIFIED':
          return 'justify'
        case 'RIGHT':
          return 'right'
      }
    })(),
    hasChildStyles: inherited,
    defined: true,
  }
}
