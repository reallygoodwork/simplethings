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
        'btn-xs': 'var(--btn-fz__xs)',
        'btn-sm': 'var(--btn-fz__sm)',
        'btn': 'var(--btn-fz)',
      },
      lineHeight: {
        'btn': 'var(--btn-lh)',
      },
      spacing: {
        'framex': 'var(--textFrameX)',
        'framey': 'var(--textFrameY)',
        'frame': 'var(--textFrame)',
        'framex--xs': 'var(--textFrameX--xs)',
        'framey--xs': 'var(--textFrameY--xs)',
        'frame--xs': 'var(--textFrame--xs)',
        'framex--sm': 'var(--textFrameX--sm)',
        'framey--sm': 'var(--textFrameY--sm)',
        'frame--sm': 'var(--textFrame--sm)',
        'framex--md': 'var(--textFrameX--md)',
        'framey--md': 'var(--textFrameY--md)',
        'frame--md': 'var(--textFrame--md)',
        'framex--lg': 'var(--textFrameX--lg)',
        'framey--lg': 'var(--textFrameY--lg)',
        'frame--lg': 'var(--textFrame--lg)',
        'framex--xl': 'var(--textFrameX--xl)',
        'framey--xl': 'var(--textFrameY--xl)',
        'frame--xl': 'var(--textFrame--xl)',
        'framex--2xl': 'var(--textFrameX--2xl)',
        'framey--2xl': 'var(--textFrameY--2xl)',
        'frame--2xl': 'var(--textFrame--2xl)',
        'base': 'var(--space-base)',
        'xs': 'var(--space-xs)',
        's': 'var(--space-s)',
        'm': 'var(--space-m)',
        'l': 'var(--space-l)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      }
    }
  },
  plugins: [],
};

export default config;