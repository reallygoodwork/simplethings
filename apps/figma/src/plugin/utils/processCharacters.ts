const lineBreakRegExp = /\r\n|[\n\r\u2028\u2029\u0085]/

export function processCharacters(characters: string): string[] {
  const lines = characters.split(lineBreakRegExp)
  const results: string[] = []
  for (let i = 0; i < lines.length; ++i) {
    if (i !== 0) {
      results.push('br')
    }
    results.push(lines[i])
  }
  return results
}
