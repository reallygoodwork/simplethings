import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/components/index.ts", "tailwind.config.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  ...options,
}));