import { Styles } from './interfaces'

/**
 * @param letterSpacingConfig - The letterSpacing config object
 * @param node - The node to get the letterSpacing from
 * @param inherited - Whether the letterSpacing is inherited from a parent node
 * @returns The letterSpacing config object
 */
export function letterSpacing(
  letterSpacingConfig: Styles['letterSpacing'],
  node: any,
  inherited = false,
): Styles['letterSpacing'] {
  if ('letterSpacing' in node) {
    if (node['letterSpacing'].value === 0) {
      return letterSpacingConfig
    } else if (node['letterSpacing'].unit === 'PIXELS') {
      return {
        ...letterSpacingConfig,
        value: parseFloat(node['letterSpacing'].value.toFixed(0)),
        unit: 'px',
        hasChildStyles: inherited,
        defined: true,
      }
    } else if (node['letterSpacing'].unit === 'PERCENT') {
      return {
        ...letterSpacingConfig,
        value: parseFloat(node['letterSpacing'].value.toFixed(2)) * 0.01,
        unit: 'em',
        hasChildStyles: inherited,
        defined: true,
      }
    }
  } else {
    return letterSpacingConfig
  }
}
