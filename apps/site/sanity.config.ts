import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { presentationTool, defineDocuments } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'

import { sanityComponents } from './src/sanity'

const SANITY_STUDIO_PREVIEW_URL = import.meta.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:1234'

export default defineConfig({
  name: 'default',
  title: 'Really Good Work Inc.',
  projectId: 'e9frm8yx',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/:slug',
            filter: `_type == "page" && slug == $slug`
          }
        ])
      }
    }),
    vercelDeployTool(),
  ],
  schema: {
    types: sanityComponents,
  },
})
