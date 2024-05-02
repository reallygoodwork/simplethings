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
    --heading-font-family: "${BODY_FONT}";
    --body-font-family: "${BODY_FONT}";
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

    /* Button */
    --btn-radius: ${BUTTON_RADIUS};
    --btn-x: ${BUTTON_PADDING_X};
    --btn-xs-y: ${BUTTON_XS_Y};
    --btn-sm-y: ${BUTTON_SM_Y};
    --btn-md-y: ${BUTTON_MD_Y};
    --btn-lg-y: ${BUTTON_LG_Y};
    --btn-link-y: ${BUTTON_LINK_Y};
    --btn-gap: ${BUTTON_GAP};
    --btn-leading: ${BUTTON_LEADING};
    --btn-font-size-xs: ${BUTTON_FONT_SIZE_XS};
    --btn-font-size-sm: ${BUTTON_FONT_SIZE_SM};
    --btn-font-size: ${BUTTON_FONT_SIZE};
  }
}

@layer components {
  .hero {
    font-family: var(--heading-font-family);
    font-size: ${HERO_FONT_SIZE};
    line-height: ${HERO_LINE_HEIGHT};
    font-weight: ${HERO_FONT_WEIGHT};
    letter-spacing: ${HERO_LETTER_SPACING};
  }

  .title {
    font-family: var(--heading-font-family);
    font-size: ${TITLE_FONT_SIZE};
    line-height: ${TITLE_LINE_HEIGHT};
    font-weight: ${TITLE_FONT_WEIGHT};
    letter-spacing: ${TITLE_LETTER_SPACING};
  }

  .large {
    font-family: var(--heading-font-family);
    font-size: ${LARGE_FONT_SIZE};
    line-height: ${LARGE_LINE_HEIGHT};
    font-weight: ${LARGE_FONT_WEIGHT};
    letter-spacing: ${LARGE_LETTER_SPACING};
  }

  .subtitle {
    font-family: var(--heading-font-family);
    font-size: ${SUBTITLE_FONT_SIZE};
    line-height: ${SUBTITLE_LINE_HEIGHT};
    font-weight: ${SUBTITLE_FONT_WEIGHT};
  }

  .lead {
    font-family: var(--heading-font-family);
    font-size: ${LEAD_FONT_SIZE};
    line-height: ${LEAD_LINE_HEIGHT};
    font-weight: ${LEAD_FONT_WEIGHT};
  }

  .lead-tight {
    font-family: var(--body-font-family);
    font-size: ${LEAD_FONT_SIZE};
    line-height: ${LEAD_LINE_HEIGHT_TIGHT};
    font-weight: ${LEAD_FONT_WEIGHT};
  }

  .body {
    font-family: var(--body-font-family);
    font-size: ${BODY_FONT_SIZE};
    line-height: ${BODY_LINE_HEIGHT};
    font-weight: ${BODY_FONT_WEIGHT};
  }

  .small {
    font-family: var(--body-font-family);
    font-size: ${SMALL_FONT_SIZE};
    line-height: ${SMALL_LINE_HEIGHT};
    font-weight: ${SMALL_FONT_WEIGHT};
  }

  .caption {
    font-family: var(--body-font-family);
    font-size: ${CAPTION_FONT_SIZE};
    line-height: ${CAPTION_LINE_HEIGHT};
    font-weight: ${CAPTION_FONT_WEIGHT};
  }
}

html {
  font-family: var(--body-font-family), ${fontFamily.sans};
  font-size: var(--baseUnit);
  color: ${COLOR_BODY};
}

body {
  font-family: var(--body-font-family), ${fontFamily.sans};
  font-size: ${BODY_FONT_SIZE};
  line-height: ${BODY_LINE_HEIGHT};
  font-weight: ${BODY_FONT_WEIGHT};
}
`;

fs.writeFileSync("simplethings.css", styles);
