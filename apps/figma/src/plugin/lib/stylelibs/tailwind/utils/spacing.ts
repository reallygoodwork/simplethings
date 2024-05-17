import DEFAULT_THEME from '../../themes/tailwind'
import { keywordOrJIT } from './keywordOrJIT'

const spacingKeywords = new Map<string, string>()

for (const [keyword, value] of Object.entries(DEFAULT_THEME.spacing ?? {})) {
  spacingKeywords.set(value, keyword)
}

export function spacing(value: number): string {
  if (value === 0) {
    return '-0'
  }
  return keywordOrJIT(spacingKeywords, `${value / 16}rem`)
}
