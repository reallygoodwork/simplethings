import type { Config } from "tailwindcss";
import {
  FONT_FAMILY_SANS
} from "@simplethings/design-tokens/tailwind"

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    fontFamily: {
      sans: FONT_FAMILY_SANS,
    },
    colors: {
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      body: 'hsl(var(--color-body) / <alpha-value>)',
    }
  },
  plugins: [],
};

export default config;