import type { Config } from "tailwindcss";
import {
  ST_FONT_FAMILY
} from "@simplethings/design-tokens"

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    fontFamily: {
      sans: ST_FONT_FAMILY,
    },
    colors: {
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      body: 'hsl(var(--color-body) / <alpha-value>)',
    }
  },
  plugins: [],
};

export default config;