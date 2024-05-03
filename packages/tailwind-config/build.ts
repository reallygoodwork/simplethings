import {
  BASE_UNIT,
  BODY_FONT,
  BODY_FONT_FAMILY,
  BODY_FONT_SIZE,
  BODY_FONT_WEIGHT,
  BODY_LINE_HEIGHT,
  BUTTON_FONT_SIZE,
  BUTTON_FONT_SIZE_SM,
  BUTTON_FONT_SIZE_XS,
  BUTTON_FONT_WEIGHT,
  BUTTON_GAP,
  BUTTON_LEADING,
  BUTTON_LG_Y,
  BUTTON_LINK_Y,
  BUTTON_MD_Y,
  BUTTON_PADDING_X,
  BUTTON_RADIUS,
  BUTTON_SM_Y,
  BUTTON_XS_Y,
  CAPTION_FONT_FAMILY,
  CAPTION_FONT_SIZE,
  CAPTION_FONT_WEIGHT,
  CAPTION_LINE_HEIGHT,
  COLOR_ACCENT,
  COLOR_ALT,
  COLOR_BODY,
  COLOR_MUTED,
  COLOR_PRIMARY,
  COLOR_SOFT,
  COLOR_SURFACE,
  HERO_FONT_FAMILY,
  HERO_FONT_SIZE,
  HERO_FONT_WEIGHT,
  HERO_LETTER_SPACING,
  HERO_LINE_HEIGHT,
  INPUT_BG,
  INPUT_BORDER,
  INPUT_TEXT,
  LARGE_FONT_FAMILY,
  LARGE_FONT_SIZE,
  LARGE_FONT_WEIGHT,
  LARGE_LETTER_SPACING,
  LARGE_LINE_HEIGHT,
  LEAD_FONT_FAMILY,
  LEAD_FONT_SIZE,
  LEAD_FONT_WEIGHT,
  LEAD_LINE_HEIGHT,
  LEAD_LINE_HEIGHT_TIGHT,
  SMALL_FONT_FAMILY,
  SMALL_FONT_SIZE,
  SMALL_FONT_WEIGHT,
  SMALL_LINE_HEIGHT,
  SUBTITLE_FONT_FAMILY,
  SUBTITLE_FONT_SIZE,
  SUBTITLE_FONT_WEIGHT,
  SUBTITLE_LINE_HEIGHT,
  TITLE_FONT_FAMILY,
  TITLE_FONT_SIZE,
  TITLE_FONT_WEIGHT,
  TITLE_LETTER_SPACING,
  TITLE_LINE_HEIGHT,
} from "@simplethings/design-tokens";
import fs from "fs";
import { fontFamily } from "tailwindcss/defaultTheme";

const styles = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --baseUnit: ${BASE_UNIT};
    --multiplier: 4;
    --spaceIncrement: 1.85;

    --baseTextSize: calc(var(--baseUnit) * var(--multiplier) * 1rem);
    --heading-ff: "${BODY_FONT}";
    --base-ff: "${BODY_FONT}";
    --color-primary: ${COLOR_PRIMARY};
    --color-body: ${COLOR_BODY};
    --color-alt: ${COLOR_ALT};
    --color-accent: ${COLOR_ACCENT};
    --color-surface: ${COLOR_SURFACE};
    --color-soft: ${COLOR_SOFT};
    --color-muted: ${COLOR_MUTED};
    --color-input-bg: ${INPUT_BG};
    --color-input-text: ${INPUT_TEXT};
    --color-input-border: ${INPUT_BORDER};

    /* Spacing */
    --textFrameRatio: 1.87;
    --textFrameY: 0.67em;
    --textFrameX: calc(var(--textFrameY) * var(--textFrameRatio));
    --textFrame: var(--textFrameY) var(--textFrameX);
    --textFrameX--xs: calc(var(--textFrameX) / 2);
    --textFrameY--xs: calc(var(--textFrameY) / 2);
    --textFrameX--sm: calc(var(--textFrameX) * 0.75);
    --textFrameY--sm: calc(var(--textFrameY) * 0.75);
    --textFrameX--md: calc(var(--textFrameX) * 1);
    --textFrameY--md: calc(var(--textFrameY) * 1);
    --textFrameX--lg: calc(var(--textFrameX) * 1.25);
    --textFrameY--lg: calc(var(--textFrameY) * 1.25);
    --textFrameX--xl: calc(var(--textFrameX) * 1.5);
    --textFrameY--xl: calc(var(--textFrameY) * 1.5);
    --textFrameX--2xl: calc(var(--textFrameX) * 2);
    --textFrameY--2xl: calc(var(--textFrameY) * 2);
    --textFrame--xs: calc(var(--textFrameY) / 2) calc(var(--textFrameX) / 2);
    --textFrame--sm: calc(var(--textFrameY) / 1.5) calc(var(--textFrameX) / 1.5);
    --textFrame--md: calc(var(--textFrameY) / .75) calc(var(--textFrameX) / .75);
    --textFrame--lg: calc(var(--textFrameY) * 1.5) calc(var(--textFrameX) * 1.5);
    --textFrame--xl: calc(var(--textFrameY) * 2) calc(var(--textFrameX) * 2);
    --textFrame--2xl: calc(var(--textFrameY) * 3) calc(var(--textFrameX) * 3);

    --space-base: var(--baseUnit);
    --space-xs: calc(var(--space-base) / calc(var(--spaceIncrement) / 2));
    --space-s: calc(var(--space-base) * calc(var(--spaceIncrement) / 2));
    --space-m: calc(var(--space-base) * var(--spaceIncrement));
    --space-l: calc(var(--space-m) * var(--spaceIncrement));
    --space-xl: calc(var(--space-l) * var(--spaceIncrement));
    --space-2xl: calc(var(--space-xl) * var(--spaceIncrement));
    --space-3xl: calc(var(--space-2xl) * var(--spaceIncrement));
    --space-4xl: calc(var(--space-3xl) * var(--spaceIncrement));

    /* Button */
    --btn-radius: ${BUTTON_RADIUS};
    --btn-x: ${BUTTON_PADDING_X};
    --btn-xs__y: ${BUTTON_XS_Y};
    --btn-sm__y: ${BUTTON_SM_Y};
    --btn-md__y: ${BUTTON_MD_Y};
    --btn-lg__y: ${BUTTON_LG_Y};
    --btn-link__y: ${BUTTON_LINK_Y};
    --btn-gap: ${BUTTON_GAP};
    --btn-lh: ${BUTTON_LEADING};
    --btn-fz__xs: ${BUTTON_FONT_SIZE_XS};
    --btn-fz__sm: ${BUTTON_FONT_SIZE_SM};
    --btn-fz: ${BUTTON_FONT_SIZE};
    --btn-fw: ${BUTTON_FONT_WEIGHT};

    /* Typography */
    --hero-ff: var(--heading-ff);
    --hero-fz: ${HERO_FONT_SIZE};
    --hero-lh: ${HERO_LINE_HEIGHT};
    --hero-fw: ${HERO_FONT_WEIGHT};
    --hero-ls: ${HERO_LETTER_SPACING};

    --title-ff: var(--heading-ff);
    --title-fz: ${TITLE_FONT_SIZE};
    --title-lh: ${TITLE_LINE_HEIGHT};
    --title-fw: ${TITLE_FONT_WEIGHT};
    --title-ls: ${TITLE_LETTER_SPACING};

    --large-ff: var(--heading-ff);
    --large-fz: ${LARGE_FONT_SIZE};
    --large-lh: ${LARGE_LINE_HEIGHT};
    --large-fw: ${LARGE_FONT_WEIGHT};
    --large-ls: ${LARGE_LETTER_SPACING};

    --subtitle-ff: var(--base-ff);
    --subtitle-fz: ${SUBTITLE_FONT_SIZE};
    --subtitle-lh: ${SUBTITLE_LINE_HEIGHT};
    --subtitle-fw: ${SUBTITLE_FONT_WEIGHT};
    --subtitle-ls: 0;

    --lead-ff: var(--base-ff);
    --lead-fz: ${LEAD_FONT_SIZE};
    --lead-lh: ${LEAD_LINE_HEIGHT};
    --lead-fw: ${LEAD_FONT_WEIGHT};
    --lead-ls: 0;
    --lead-tight-lh: ${LEAD_LINE_HEIGHT_TIGHT};

    --body-ff: var(--base-ff);
    --body-fz: ${BODY_FONT_SIZE};
    --body-lh: ${BODY_LINE_HEIGHT};
    --body-fw: ${BODY_FONT_WEIGHT};
    --body-ls: 0;

    --small-ff: var(--base-ff);
    --small-fz: ${SMALL_FONT_SIZE};
    --small-lh: ${SMALL_LINE_HEIGHT};
    --small-fw: ${SMALL_FONT_WEIGHT};
    --small-ls: 0;

    --caption-ff: var(--base-ff);
    --caption-fz: ${CAPTION_FONT_SIZE};
    --caption-lh: ${CAPTION_LINE_HEIGHT};
    --caption-fw: ${CAPTION_FONT_WEIGHT};
    --caption-ls: 0;


  }
}

@layer components {
  .hero {
    font-family: var(--hero-ff);
    font-size: var(--hero-fz);
    line-height: var(--hero-lh);
    font-weight: var(--hero-fw);
    letter-spacing: var(--hero-ls);
  }

  .title {
    font-family: var(--title-ff);
    font-size: var(--title-fz);
    line-height: var(--title-lh);
    font-weight: var(--title-fw);
    letter-spacing: var(--title-ls);
  }

  .large {
    font-family: var(--large-ff);
    font-size: var(--large-fz);
    line-height: var(--large-lh);
    font-weight: var(--large-fw);
    letter-spacing: var(--large-ls);
  }

  .subtitle {
    font-family: var(--subtitle-ff);
    font-size: var(--subtitle-fz);
    line-height: var(--subtitle-lh);
    font-weight: var(--subtitle-fw);
    letter-spacing: var(--subtitle-ls);
  }

  .lead {
    font-family: var(--lead-ff);
    font-size: var(--lead-fz);
    line-height: var(--lead-lh);
    font-weight: var(--lead-fw);
    letter-spacing: var(--lead-ls);
  }

  .lead-tight {
    font-family: var(--lead-ff);
    font-size: var(--lead-fz);
    line-height: var(--lead-tight-lh);
    font-weight: var(--lead-fw);
    letter-spacing: var(--lead-ls);
  }

  .body {
    font-family: var(--body-ff);
    font-size: var(--body-fz);
    line-height: var(--body-lh);
    font-weight: var(--body-fw);
    letter-spacing: var(--body-ls);
  }

  .small {
    font-family: var(--small-ff);
    font-size: var(--small-fz);
    line-height: var(--small-lh);
    font-weight: var(--small-fw);
    letter-spacing: var(--small-ls);
  }

  .caption {
    font-family: var(--caption-ff);
    font-size: var(--caption-fz);
    line-height: var(--caption-lh);
    font-weight: var(--caption-fw);
    letter-spacing: var(--caption-ls);
  }
}

html {
  font-family: var(--base-ff), ${fontFamily.sans};
  font-size: var(--baseTextSize);
  color: ${COLOR_BODY};
}

body {
  font-family: var(--base-ff), ${fontFamily.sans};
  font-size: var(--baseTextSize);
  line-height: ${BODY_LINE_HEIGHT};
  font-weight: ${BODY_FONT_WEIGHT};
}
`;

fs.writeFileSync("simplethings.css", styles);
