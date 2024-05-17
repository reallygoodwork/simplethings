import { Styles } from './interfaces'

/**
 * @param textTransformConfig - The textTransform config object
 * @param node - The node to get the textTransform from
 * @param inherited - Whether the textTransform is inherited from a parent node
 * @returns The textTransform config object
 */
export function textTransform(
  textTransformConfig: Styles['textTransform'],
  node: SceneNode,
  inherited = false,
): Styles['textTransform'] {
  if (node['textCase'] !== 'ORIGINAL') {
    return {
      ...textTransformConfig,
      value: (() => {
        switch (node['textCase']) {
          case 'UPPER':
            return 'uppercase'
          case 'LOWER':
            return 'lowercase'
        }
      })(),
      hasChildStyles: inherited,
      defined: true,
    }
  } else {
    return textTransformConfig
  }
}
