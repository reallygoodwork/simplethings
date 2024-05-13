import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/components/output/index.ts", "src/components/output/styles.css"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  minify: !options.watch,
  external: ["react"],
  ...options,
}));