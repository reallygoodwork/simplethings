import type { Config } from "tailwindcss";
import {
  ST_FONT_FAMILY
} from "@simplethings/design-tokens"
import {fontFamily} from "tailwindcss/defaultTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    fontFamily: {
      sans: [`"${ST_FONT_FAMILY}"`, ...fontFamily.sans],
    },
    colors: {
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      body: 'hsl(var(--color-body) / <alpha-value>)',
      alt: 'hsl(var(--color-alt) / <alpha-value>)',
      accent: 'hsl(var(--color-accent) / <alpha-value>)',
      surface: 'hsl(var(--color-surface) / <alpha-value>)',
      soft: 'hsl(var(--color-soft) / <alpha-value>)',
      muted: 'hsl(var(--color-muted) / <alpha-value>)',
    },
    borderRadius: {
      button: 'var(--button-radius)',
    }
  },
  plugins: [],
};

export default config;