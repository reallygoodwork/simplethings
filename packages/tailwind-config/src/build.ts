import {
  BODY_FONT_FAMILY,
} from "@simplethings/design-tokens";
import fs from "fs";
import { fontFamily } from "tailwindcss/defaultTheme";
import { colorBuilder } from "./color";
import { spacingBuilder } from "./spacing";
import { textFrameBuilder } from "./textFrame";
import { TypographyClasses, typographyBuilder } from "./components/text";

interface StylesConfig {
  multiplier: number;
  baseUnit: number;
  spaceIncrement: number;
  initialGreyLightness: number;
  greySaturation: number;
  greyscaleLightnessIncrement: number;
  frRatio: number;
  frY: number;
  bodyFontFamily: string;
  headingFontFamily: string;
}

const DEFAULT_CONFIG: StylesConfig = {
  multiplier: 4,
  baseUnit: 4,
  spaceIncrement: 1.85,
  initialGreyLightness: 93,
  greySaturation: 5,
  greyscaleLightnessIncrement: 11.3,
  frRatio: 1.87,
  frY: 0.67,
  bodyFontFamily: BODY_FONT_FAMILY,
  headingFontFamily: BODY_FONT_FAMILY,
};

export const generateStyles = ({
  multiplier = DEFAULT_CONFIG.multiplier,
  baseUnit = DEFAULT_CONFIG.baseUnit,
  spaceIncrement = DEFAULT_CONFIG.spaceIncrement,
  initialGreyLightness = DEFAULT_CONFIG.initialGreyLightness,
  greySaturation = DEFAULT_CONFIG.greySaturation,
  greyscaleLightnessIncrement = DEFAULT_CONFIG.greyscaleLightnessIncrement,
  frRatio = DEFAULT_CONFIG.frRatio,
  frY = DEFAULT_CONFIG.frY,
  bodyFontFamily = DEFAULT_CONFIG.bodyFontFamily,
  headingFontFamily = DEFAULT_CONFIG.headingFontFamily,
}: StylesConfig) => `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --multiplier: ${multiplier};
    --baseUnit: ${baseUnit}px;
    --spaceIncrement: ${spaceIncrement};

    ${colorBuilder({
      greySaturation,
      initialGreyLightness,
      greyscaleLightnessIncrement,
    })}
    ${spacingBuilder({
      baseUnit,
      spaceIncrement,
    })}
    ${textFrameBuilder({
      frRatio, frY
    })}
    ${typographyBuilder({
      headingFontFamily,
      bodyFontFamily,
    })}

    /* Surfaces */
    --rounded-base: 0.375rem;
    --btn-radius: var(--rounded-base);
    --input-radius: var(--rounded-base);
    --select-radius: var(--rounded-base);
    --textarea-radius: var(--rounded-base);
    --card-radius: var(--rounded-base);
    --modal-radius: var(--rounded-base);
    --toast-radius: var(--rounded-base);
    --tooltip-radius: var(--rounded-base);
    --content-gap: calc(var(--baseUnit) * 1.5);

    --select-icon: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.35355 4.06066C8.15829 3.8654 7.84171 3.8654 7.64645 4.06066L5.35355 6.35355C5.15829 6.54882 4.84171 6.54882 4.64645 6.35355C4.45118 6.15829 4.45118 5.84171 4.64645 5.64645L6.93934 3.35356C7.52513 2.76777 8.47487 2.76777 9.06066 3.35355L11.3536 5.64645C11.5488 5.84171 11.5488 6.15829 11.3536 6.35355C11.1583 6.54882 10.8417 6.54882 10.6464 6.35355L8.35355 4.06066Z' fill='%236b7280'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.35355 11.9393C8.15829 12.1346 7.84171 12.1346 7.64645 11.9393L5.35355 9.64645C5.15829 9.45119 4.84171 9.45119 4.64645 9.64645C4.45118 9.84171 4.45118 10.1583 4.64645 10.3536L6.93934 12.6464C7.52513 13.2322 8.47487 13.2322 9.06066 12.6464L11.3536 10.3536C11.5488 10.1583 11.5488 9.84171 11.3536 9.64645C11.1583 9.45119 10.8417 9.45119 10.6464 9.64645L8.35355 11.9393Z' fill='%236b7280'/%3E%3C/svg%3E%0A");
  --select-icon-size: 1.25em;
  --check-icon: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  --radio-icon: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  }
}

@layer components {
  ${TypographyClasses}


}

html {
  font-family: var(--base-ff), ${fontFamily.sans};
  font-size: var(--baseTextSize);
  color: var(--c-body);
}

body {
  font-family: var(--base-ff), ${fontFamily.sans};
  font-size: var(--baseTextSize);
  line-height: var(--body-lh);
  font-weight: var(--body-fw);
}

.select {
  appearance: none;
  background-image: var(--select-icon);
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: var(--select-icon-size) var(--select-icon-size);
}

[type="checkbox"], [type="radio"] {
  appearance: none;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  user-select: none;
}

[type='checkbox']:checked, [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: var(--check-icon);
}

[type='radio']:checked {
  background-image: var(--radio-icon);
}


`;

fs.writeFileSync("simplethings.css", generateStyles(DEFAULT_CONFIG));