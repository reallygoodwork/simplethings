/**
 * this function returns all used fonts to textNodes
 */

export default function getAllFonts(textNodes: Array<TextNode>) {
  const fonts: Array<Font> = [];
  const pushUnique = (font: Font) => {
    if (
      !fonts.some(
        (item) => item.fontName.family === font.fontName.family && item.fontName.style === font.fontName.style
      )
    ) {
      fonts.push(font);
    }
  };

  for (const node of textNodes) {
    if (node.fontName === figma.mixed) {
      const len = node.characters.length;
      for (let i = 0; i < len; i++) {
        // const font = node.getRangeFontName(i, i + 1) as Font;
        // pushUnique(font);
      }
    } else {
      // pushUnique(node.fontName as Font);
    }
  }

  return fonts;
}
