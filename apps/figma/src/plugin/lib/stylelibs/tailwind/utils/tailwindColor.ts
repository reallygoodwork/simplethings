import DEFAULT_THEME from '../../themes/tailwind'
import { flattenTheme } from './flattenTheme'
import { keywordOrJIT } from './keywordOrJIT'

const theme = DEFAULT_THEME

const colorKeywords = new Map<string, string>()

for (const [keyword, value] of Object.entries(flattenTheme(theme.colors ?? {}))) {
  // TODO: normalize hex
  colorKeywords.set(value.toLowerCase(), keyword)
}

export function color(hex: string): string {
  hex = hex.toLowerCase()

  if (hex === '#ffffff') {
    return '-white'
  }
  if (hex === '#000000') {
    return '-black'
  }
  if (hex.length === 9 && hex.endsWith('00')) {
    return '-transparent'
  }

  return keywordOrJIT(colorKeywords, hex)
}
