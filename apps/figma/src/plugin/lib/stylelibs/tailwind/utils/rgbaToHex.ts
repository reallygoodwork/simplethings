export function convertToDegree(matrix: Transform): number {
  const values = [...matrix[0], ...matrix[1]]
  const a = values[0]
  const b = values[1]
  const angle = Number((Math.atan2(b, a) * (180 / Math.PI) + 90).toFixed(2))

  return angle <= 0 ? angle + 360 : angle
}

export function linearGradientPaintToHex(width, height, linearGradientPaint: GradientPaint): any {
  const angle = convertToDegree(linearGradientPaint.gradientTransform)
  return `${angle}deg, ${linearGradientPaint.gradientStops
    .map((stop) => {
      return `${rgbaToHex({ ...stop.color })} ${parseFloat((stop.position * 100).toFixed(2))}%`
    })
    .join(',')}`
}

export function rgbaToHex(rgba: RGBA): string {
  const { r, g, b, a } = rgba
  return (
    '#' +
    (a === 1 ? [r, g, b] : [r, g, b, a])
      .map((c) => {
        const str = Math.round(c * 255)
          .toString(16)
          .toUpperCase()
        return str.length === 1 ? '0' + str : str
      })
      .join('')
  )
}

export function solidPaintToHex(solidPaint: SolidPaint): string {
  return rgbaToHex({ ...solidPaint.color, a: solidPaint.opacity ?? 1 })
}
