import {
  COLOR_TIMBER_SOURCE,
  COLOR_MARSHLAND_SOURCE,
  FONT_FAMILY_SANS
} from "@simplethings/design-tokens/tailwind"
import fs from "fs";

const styles = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-family: ${FONT_FAMILY_SANS};
    --color-primary: ${COLOR_TIMBER_SOURCE};
    --color-body: ${COLOR_MARSHLAND_SOURCE};
  }
}


@layer components {
 .st-body {
  @apply font-sans text-base font-medium;
  line-height: 1.375rem;
 }
}
`;

fs.writeFileSync("simplethings.css", styles);
