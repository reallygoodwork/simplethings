// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@simplethings/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/@simplethings/react/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;