import { Styles } from './interfaces'

/**
 * @param fontStyleConfig - The fontStyle config object
 * @param node - The node to get the fontStyle from
 * @param inherited - Whether the fontStyle is inherited from a parent node
 * @returns The fontStyle config object
 * */
export function fontStyle(fontStyleConfig: Styles['fontStyle'], node: any, inherited = false): Styles['fontStyle'] {
  //@ts-ignore
  if (
    node?.getRangeFontName &&
    (node.getRangeFontName(0, 1).style as any) !== figma.mixed &&
    node.getRangeFontName(0, 1)?.style === 'ITALIC'
  ) {
    return {
      ...fontStyleConfig,
      value: 'italic',
      hasChildStyles: inherited,
      defined: true,
    }
  } else {
    return fontStyleConfig
  }
}
