import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: "default",
  title: "Really Good Work Inc.",
  projectId: 'e9frm8yx',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
});