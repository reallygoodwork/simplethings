import { Styles } from './interfaces'

/**
 * @param lineHeightConfig - The lineHeight config object
 * @param node - The node to get the lineHeight from
 * @param inherited - Whether the lineHeight is inherited from a parent node
 * @returns The lineHeight config object
 */
export function lineHeight(
  lineHeightConfig: Styles['lineHeight'],
  node: SceneNode,
  inherited = false,
): Styles['lineHeight'] {
  if (!node['lineHeight']?.value || (node['lineHeight'] !== figma.mixed && node['lineHeight'].unit === 'AUTO')) {
    return lineHeightConfig
  }

  let unit = 'px'

  if (node['lineHeight'].unit === 'PERCENT') {
    unit = '%'
  }

  return {
    ...lineHeightConfig,
    value: parseInt(node['lineHeight'].value.toFixed()),
    unit,
    hasChildStyles: inherited,
    defined: true,
  }
}
