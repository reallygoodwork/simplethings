import type { Config } from "tailwindcss";
import sharedConfig from "@simplethings/tailwind-config";

const config: Pick<Config, "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;