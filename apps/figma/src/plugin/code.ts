import { generateSpec } from './generators/generateSpec';

figma.showUI(__html__, { width: 600, height: 600 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'GENERATE_SPEC') {

    if (figma.currentPage.selection[0]) {
      const spec = await generateSpec(figma.currentPage.selection[0]);
      figma.ui.postMessage({ type: 'SPEC', spec });
    }

  }
}