import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/components/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  minify: !options.watch,
  external: ["react"],
  ...options,
}));