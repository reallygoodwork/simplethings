import { Styles } from './interfaces'

/**
 * @param fontFamilyConfig - The fontFamily config object
 * @param node - The node to get the fontFamily from
 * @param inherited - Whether the fontFamily is inherited from a parent node
 * @returns The fontFamily config object
 * */
export function fontFamily(
  fontFamilyConfig: Styles['fontFamily'],
  node: TextNode,
  inherited = false,
): Styles['fontFamily'] {
  if (node?.getRangeFontName) {
    return {
      ...fontFamilyConfig,
      //@ts-ignore
      value: node.getRangeFontName(0, 1).family,
      unit: 'px',
      hasChildStyles: inherited,
      defined: true,
    }
  } else {
    return fontFamilyConfig
  }
}
