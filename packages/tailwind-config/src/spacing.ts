export interface Spacing {
  baseUnit: number;
  spaceIncrement: number;
}

export const spacingBuilder = ({
  baseUnit = 4,
  spaceIncrement = 1.85,
}: Spacing) => {
  return `/* Spacing */
    --space-base: var(--baseUnit, ${baseUnit}px);
    --space-xs: calc(var(--space-base) / calc(var(--spaceIncrement, ${spaceIncrement}) / 2.5));
    --space-s: calc(var(--space-base) * calc(var(--spaceIncrement, ${spaceIncrement}) / 2));
    --space-m: calc(var(--space-base) * var(--spaceIncrement, ${spaceIncrement}));
    --space-l: calc(var(--space-m) * var(--spaceIncrement, ${spaceIncrement}));
    --space-xl: calc(var(--space-l) * var(--spaceIncrement, ${spaceIncrement}));
    --space-2xl: calc(var(--space-xl) * var(--spaceIncrement, ${spaceIncrement}));
    --space-3xl: calc(var(--space-2xl) * var(--spaceIncrement, ${spaceIncrement}));
    --space-4xl: calc(var(--space-3xl) * var(--spaceIncrement, ${spaceIncrement}));
  `;
};

export const tailwindSpacing = {
  base: "var(--space-base)",
  xs: "var(--space-xs)",
  s: "var(--space-s)",
  m: "var(--space-m)",
  l: "var(--space-l)",
  xl: "var(--space-xl)",
  "2xl": "var(--space-2xl)",
  "3xl": "var(--space-3xl)",
  "4xl": "var(--space-4xl)",
};
