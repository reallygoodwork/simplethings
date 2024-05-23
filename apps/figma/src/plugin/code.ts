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


  if (msg.type === 'GENERATE_SPEC') {
    console.clear();
    if (figma.currentPage.selection[0]) {
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