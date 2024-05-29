import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/ui",
  plugins: [react(), viteSingleFile(), UnoCSS()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    outDir: "../../dist",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});