import { generateSpec } from './generators/generateSpec';

figma.showUI(__html__, { width: 600, height: 600 });

figma.on("selectionchange", () => {
  if (figma.currentPage.selection[0]) {
    const storedSpec = figma.currentPage.selection[0].getPluginData('dave-spec');

    if (storedSpec) {
      figma.ui.postMessage({ type: 'HAS_SAVED' });
    }
  } else {
    figma.ui.postMessage({ type: 'CLEAR_SAVED' });
  }
})

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'USE_SAVED') {
    if (figma.currentPage.selection[0]) {
      const storedSpec = figma.currentPage.selection[0].getPluginData('dave-spec');
      figma.ui.postMessage({ type: 'SPEC', spec: JSON.parse(storedSpec) });
    }
  }

  if (msg.type === 'GENERATE_TYPOGRAPHY') {
    console.clear()
    if (figma.currentPage.selection[0]) {
      const textStyles = await figma.getLocalTextStylesAsync()
      const typography = await generateTextStyles(textStyles);
      figma.ui.postMessage({ type: 'TYPOGRAPHY', typography });
    }
  }


  if (msg.type === 'GENERATE_SPEC') {
    console.clear();
    if (figma.currentPage.selection[0]) {
      console.log(figma.currentPage.selection[0])
      const spec = await generateSpec(figma.currentPage.selection[0]);
      figma.ui.postMessage({ type: 'SPEC', spec });
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


function generateTextStyles(textStyles: TextStyle[]): any {

  const textStyleObjects = textStyles.map((textStyle) => {
    console.log(textStyle)
    const textStyleObject = {
      name: textStyle.name,
      fontSize: textStyle.fontSize + 'px',
      fontFamily: textStyle.fontName.family,
      lineHeight: textStyle.lineHeight.unit === 'AUTO' ? 'normal' : textStyle.lineHeight.unit === 'PIXELS' ? textStyle.lineHeight.value + 'px' : textStyle.lineHeight.unit === 'PERCENT' ? textStyle.lineHeight.value + '%' : textStyle.lineHeight.value + 'em',
      letterSpacing: textStyle.letterSpacing.unit === 'PIXELS' ? textStyle.letterSpacing.value + 'px' : textStyle.letterSpacing.unit === 'PERCENT' ? textStyle.letterSpacing.value + '%' : textStyle.letterSpacing.value + 'em',
      fontWeight: textStyle.fontName.style.toLowerCase(),
      textDecoration: textStyle.textDecoration.toLowerCase(),
      textTransform: textStyle.textCase.toLowerCase(),
    }

    return textStyleObject
  })

  return textStyleObjects
}