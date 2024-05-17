export function keywordOrJIT(keywords: Map<string, string>, value: string): string {
  const keyword = keywords.get(value)
  if (keyword === 'DEFAULT') {
    return ''
  }
  if (keyword) {
    return `-${keyword}`
  }
  return `-[${value}]`
}
