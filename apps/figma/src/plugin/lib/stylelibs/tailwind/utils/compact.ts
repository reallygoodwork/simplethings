export function compact<T>(arr: (T | null | undefined)[]): T[] {
  return arr.filter(Boolean) as T[]
}
