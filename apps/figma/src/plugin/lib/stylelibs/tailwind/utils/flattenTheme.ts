export function flattenTheme(theme: Record<string, any>): Record<string, string> {
  const result: Record<string, string> = {}

  function flatten(obj: Record<string, any>, prefix = '') {
    for (const key in obj) {
      const value = obj[key]
      if (typeof value === 'object') {
        flatten(value, `${prefix}${key}-`)
      } else {
        result[`${prefix}${key}`] = value
      }
    }
  }

  flatten(theme)
  return result
}
