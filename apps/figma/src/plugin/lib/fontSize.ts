import { Styles } from './interfaces'

/**
 * @param fontSizeConfig - The fontSize config object
 * @param node - The node to get the fontSize from
 * @param inherited - Whether the fontSize is inherited from a parent node
 * @returns The fontSize config object
 * */
export function fontSize(fontSizeConfig: Styles['fontSize'], node: any, inherited = false): Styles['fontSize'] {
  if (!node.getRangeFontSize) {
    return fontSizeConfig
  }

  return {
    ...fontSizeConfig,
    //@ts-ignore
    value: Math.ceil(node.getRangeFontSize(0, 1)),
    unit: 'px',
    hasChildStyles: inherited,
    defined: true,
  }
}
