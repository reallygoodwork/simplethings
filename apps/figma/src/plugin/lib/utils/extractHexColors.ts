import { colord } from 'colord'

export function extractHexColors(node: any): string[] {
  const colors = new Set<string>()
  if (node.fills && node.fills.length) {
    node.fills.forEach((fill) => {
      console.log(fill)
      if (fill.type === 'SOLID') {
        const color = colord(fill.color)
        if (color.isValid()) {
          colors.add(color.toHex())
        }
      }
    })
  }

  return Array.from(colors)
}
