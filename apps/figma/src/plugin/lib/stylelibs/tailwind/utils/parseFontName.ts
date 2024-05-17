const fontWeightForName: Record<string, number> = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  w1: 100,
  w2: 200,
  w3: 300,
  w4: 400,
  w5: 500,
  w6: 600,
  w7: 700,
  w8: 800,
  w9: 900,
}

export function parseFontName(font: FontName): {
  family: string
  weight: number
  italic: boolean
} {
  const style = font.style.toLowerCase()
  const styleWithoutItalic = style.replace('italic', '').replace(/\s+/g, '')

  const weight = fontWeightForName[styleWithoutItalic] ?? 400
  const italic = style.includes('italic')

  return {
    family: font.family,
    weight,
    italic,
  }
}
