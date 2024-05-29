import type { Config } from "tailwindcss";
import {
  BODY_FONT,
  BUTTON_RADIUS
} from "@simplethings/design-tokens"
import { fontFamily } from "tailwindcss/defaultTheme";

import { tailwindColors } from "./src/color";
import { tailwindSpacing } from "./src/spacing";
import { tailwindTextFrame } from "./src/textFrame";

const TailwindConfig: Omit<Config, "content"> = {
  theme: {
    fontFamily: {
      sans: [`"${BODY_FONT}"`, ...fontFamily.sans],
    },
    // colors: {
    //   ...tailwindColors(),
    // },

    // extend: {
    //   backgroundImage: {
    //     none: 'none',
    //   },
    //   borderRadius: {
    //     base: 'var(--rounded-base)',
    //   },
    //   letterSpacing: {
    //     fr: 'var(--fr-ls)',
    //     hero: 'var(--hero-ls)',
    //     title: 'var(--title-ls)',
    //     subtitle: 'var(--subtitle-ls)',
    //     large: 'var(--large-ls)',
    //     lead: 'var(--lead-ls)',
    //     body: 'var(--body-ls)',
    //     small: 'var(--small-ls)',
    //     caption: 'var(--caption-ls)',
    //     btn: 'var(--btn-ls)',
    //   },
    //   fontWeight: {
    //     fr: 'var(--fr-fw)',
    //     hero: 'var(--hero-fw)',
    //     title: 'var(--title-fw)',
    //     subtitle: 'var(--subtitle-fw)',
    //     large: 'var(--large-fw)',
    //     lead: 'var(--lead-fw)',
    //     body: 'var(--body-fw)',
    //     small: 'var(--small-fw)',
    //     caption: 'var(--caption-fw)',
    //   },
    //   fontSize: {
    //     fr: 'var(--fr-fz)',
    //     'fr-xs': 'var(--fr-fz-xs)',
    //     'fr-sm': 'var(--fr-fz-sm)',
    //     'fr-lg': 'var(--fr-fz-lg)',
    //     hero: 'var(--hero-fz)',
    //     title: 'var(--title-fz)',
    //     subtitle: 'var(--subtitle-fz)',
    //     large: 'var(--large-fz)',
    //     lead: 'var(--lead-fz)',
    //     body: 'var(--body-fz)',
    //     small: 'var(--small-fz)',
    //     caption: 'var(--caption-fz)',
    //     btn: 'var(--btn-fz)',
    //     'btn-xs': 'var(--btn-fz--xs)',
    //     'btn-sm': 'var(--btn-fz--sm)',
    //     'btn-lg': 'var(--btn-fz--lg)',
    //     input: 'var(--input-fz)',
    //   },
    //   lineHeight: {
    //     fr: 'var(--fr-lh)',
    //     hero: 'var(--hero-lh)',
    //     title: 'var(--title-lh)',
    //     subtitle: 'var(--subtitle-lh)',
    //     large: 'var(--large-lh)',
    //     lead: 'var(--lead-lh)',
    //     body: 'var(--body-lh)',
    //     small: 'var(--small-lh)',
    //     caption: 'var(--caption-lh)',
    //     btn: 'var(--btn-lh)',
    //     input: 'var(--input-lh)',
    //   },
    //   spacing: {
    //     ...tailwindSpacing,
    //     ...tailwindTextFrame,
    //     'content-gap': 'var(--content-gap)',
    //   }
    // }
  },
}

export default TailwindConfig;