import type { Config } from "tailwindcss";
import {
  BODY_FONT
} from "@simplethings/design-tokens"
import {fontFamily} from "tailwindcss/defaultTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    fontFamily: {
      sans: [`"${BODY_FONT}"`, ...fontFamily.sans],
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
      btn: 'var(--btn-radius)',
    },
    extend: {
      fontSize: {
        'btn-xs': 'var(--btn-font-size-xs)',
        'btn-sm': 'var(--btn-font-size-sm)',
        'btn': 'var(--btn-font-size)',
      },
      lineHeight: {
        'btn': 'var(--btn-leading)',
      },
      spacing: {
        'btn-x': 'var(--btn-x)',
        'btn-xs-y': 'var(--btn-xs-y)',
        'btn-sm-y': 'var(--btn-sm-y)',
        'btn-md-y': 'var(--btn-md-y)',
        'btn-lg-y': 'var(--btn-lg-y)',
        'btn-link-y': 'var(--btn-link-y)',
        'btn-gap': 'var(--btn-gap)',
      }
    }
  },
  plugins: [],
};

export default config;