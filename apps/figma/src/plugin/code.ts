import { generateSpec } from './generators/generateSpec'

figma.showUI(__html__, { width: 600, height: 900 })

figma.on('selectionchange', () => {
  if (figma.currentPage.selection[0]) {
    const storedSpec = figma.currentPage.selection[0].getPluginData('dave-spec')

    if (storedSpec) {
      figma.ui.postMessage({ type: 'HAS_SAVED' })
    }
  } else {
    figma.ui.postMessage({ type: 'CLEAR_SAVED' })
  }
})

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'USE_SAVED') {
    if (figma.currentPage.selection[0]) {
      const storedSpec = figma.currentPage.selection[0].getPluginData('dave-spec')
      figma.ui.postMessage({ type: 'SPEC', spec: JSON.parse(storedSpec) })
    }
  }

  if (msg.type === 'GENERATE_TYPOGRAPHY') {
    console.clear()
    if (figma.currentPage.selection[0]) {
      const textStyles = await figma.getLocalTextStylesAsync()
      const typography = await generateTextStyles(textStyles)
      figma.ui.postMessage({ type: 'TYPOGRAPHY', typography })
    }
  }

  if (msg.type === 'GENERATE_SPEC') {
    console.clear()
    if (figma.currentPage.selection[0]) {
      const spec = await generateSpec(figma.currentPage.selection[0])
      figma.ui.postMessage({ type: 'SPEC', spec })
    }
  }

  if (msg.type === 'SAVE_CONFIG') {
    // console.log(msg)
    // if (figma.currentPage.selection[0]) {
    //   const selection = figma.currentPage.selection[0]
    //   const spec = await generateSpec(selection);
    //   selection.setPluginData('dave-spec', JSON.stringify(spec));
    //   figma.ui.postMessage({ type: 'SAVED', spec });
    // }
  }
}

function unitToCss(value: LineHeight | LetterSpacing): string {

  if (value.unit === 'AUTO') {
    return 'normal'
  }

  if (value.value === 0) {
    return '0'
  } else {
    if (value.unit === 'PIXELS') {
      return `${value.value.toFixed()}px`
    }

    if (value.unit === 'PERCENT') {
      return `${value.value.toFixed()}%`
    }

    return `${value.value}em`
  }

}

function generateTextStyles(textStyles: TextStyle[]): any {
  const textCase = {
    UPPER: 'uppercase',
    LOWER: 'lowercase',
    TITLE: 'capitalize',
    ORIGINAL: 'none',
  }

  const fontWeight = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  }

  const textStyleObjects = textStyles.map((textStyle) => {
    const textStyleObject = {
      name: textStyle.name,
      fontSize: textStyle.fontSize + 'px',
      fontFamily: textStyle.fontName.family,
      lineHeight: unitToCss(textStyle.lineHeight),
      letterSpacing: unitToCss(textStyle.letterSpacing),
      fontWeight: fontWeight[textStyle.fontName.style],
      textDecoration: textStyle.textDecoration.toLowerCase(),
      textTransform: textCase[textStyle.textCase],
    }

    return textStyleObject
  })

  return textStyleObjects
}
