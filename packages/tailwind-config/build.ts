import {
  ST_FONT_FAMILY,
  TIMBER_GREEN_SOURCE,
  MARSHLAND_SOURCE,
  ST_BODY,
  ST_HERO,
  ST_CAPTION,
  ST_SMALL,
  ST_HEADING_BOLD,
  ST_HEADING,
  ST_LEAD,
  ST_LEAD_TIGHT,
  ST_TITLE,
  ST_SUBTITLE,
  ST_LARGE,
  ST_INPUT,
  ST_INPUT_SMALL,
  ST_LABEL,
  ST_LABEL_SMALL,
  STARSHIP_SOURCE,
  WHITE,
  NORWAY_SOURCE,
  MARSHLAND_400,
  MARSHLAND_700,
  MARSHLAND_50,
  INPUT_RADIUS
} from "@simplethings/design-tokens";
import fs from "fs";

const styles = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-family: ${ST_FONT_FAMILY};
    --color-primary: ${TIMBER_GREEN_SOURCE};
    --color-body: ${MARSHLAND_SOURCE};
    --color-alt: ${MARSHLAND_50};
    --color-accent: ${STARSHIP_SOURCE};
    --color-surface: ${WHITE};
    --color-soft: ${NORWAY_SOURCE};
    --color-muted: ${MARSHLAND_400};
    --color-input-bg: ${WHITE};
    --color-input-text: ${MARSHLAND_700};
    --color-input-border: ${MARSHLAND_50};
    --button-radius: ${INPUT_RADIUS}
  }
}

@layer components {
  .st-body { font: ${ST_BODY} }
  .st-hero { font: ${ST_HERO} }
  .st-caption { font: ${ST_CAPTION} }
  .st-small { font: ${ST_SMALL} }
  .st-heading-bold { font: ${ST_HEADING_BOLD} }
  .st-heading { font: ${ST_HEADING} }
  .st-lead { font: ${ST_LEAD} }
  .st-lead-tight { font: ${ST_LEAD_TIGHT} }
  .st-title { font: ${ST_TITLE} }
  .st-subtitle { font: ${ST_SUBTITLE} }
  .st-large { font: ${ST_LARGE} }
  .st-input { font: ${ST_INPUT} }
  .st-input-small { font: ${ST_INPUT_SMALL} }
  .st-label { font: ${ST_LABEL} }
  .st-label-small { font: ${ST_LABEL_SMALL} }
}
`;

fs.writeFileSync("simplethings.css", styles);
