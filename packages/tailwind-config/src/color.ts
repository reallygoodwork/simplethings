interface Color {
  name: string;
  color: {
    h: number;
    s: number;
    l: number;
  };
}

const getAccentButtonLightness = (l: number) => {
  return l < 50 ? 95 : 15;
};

const generateColorScales = (args: Color) => {
  const { name, color } = args;

  const accentButtonLightness = getAccentButtonLightness(color.l);
  return `
    /* ${name} */
    --c-${name}: ${color.h}deg ${color.s}% ${color.l}%;
    --c-${name}-transparency: 1;
    --c-${name}-hsl: hsl(var(--c-${name}) / var(--c-${name}-transparency));
    --c-${name}-contrasted: ${color.h}deg ${color.s}% ${accentButtonLightness}%;
    --c-${name}-contrasted-hsl: hsl(var(--c-${name}-contrasted) / var(--c-${name}-transparency));
  `;
};

const getAccentGreys = (
  greyLightness: number,
  greyscaleLightnessIncrement: number
) => {
  const grey1L = greyLightness;
  const grey2L = greyLightness - greyscaleLightnessIncrement * 1;
  const grey3L = greyLightness - greyscaleLightnessIncrement * 2;
  const grey4L = greyLightness - greyscaleLightnessIncrement * 3;
  const grey5L = greyLightness - greyscaleLightnessIncrement * 4;
  const grey6L = greyLightness - greyscaleLightnessIncrement * 5;
  const grey7L = greyLightness - greyscaleLightnessIncrement * 6;
  const grey8L = greyLightness - greyscaleLightnessIncrement * 7;

  return `
    --c-grey1: var(--c-accent-h) var(--greySaturation) ${grey1L.toFixed()}%;
    --c-grey2: var(--c-accent-h) var(--greySaturation) ${grey2L.toFixed()}%;
    --c-grey3: var(--c-accent-h) var(--greySaturation) ${grey3L.toFixed()}%;
    --c-grey4: var(--c-accent-h) var(--greySaturation) ${grey4L.toFixed()}%;
    --c-grey5: var(--c-accent-h) var(--greySaturation) ${grey5L.toFixed()}%;
    --c-grey6: var(--c-accent-h) var(--greySaturation) ${grey6L.toFixed()}%;
    --c-grey7: var(--c-accent-h) var(--greySaturation) ${grey7L.toFixed()}%;
    --c-grey8: var(--c-accent-h) var(--greySaturation) ${grey8L.toFixed()}%;`;
};

const colors: Color[] = [
  {
    name: "bg",
    color: {
      h: 0,
      s: 0,
      l: 100,
    },
  },
  {
    name: "primary",
    color: {
      h: 167,
      s: 38,
      l: 15,
    },
  },
  {
    name: "base",
    color: {
      h: 48,
      s: 10,
      l: 10,
    },
  },
  {
    name: "alt",
    color: {
      h: 64,
      s: 100,
      l: 74,
    },
  },
  {
    name: "accent",
    color: {
      h: 64,
      s: 89,
      l: 54,
    },
  },
  {
    name: "surface",
    color: {
      h: 0,
      s: 0,
      l: 94,
    },
  },
  {
    name: "soft",
    color: {
      h: 103,
      s: 16,
      l: 69,
    },
  },
  {
    name: "muted",
    color: {
      h: 50,
      s: 3,
      l: 60,
    },
  },
  {
    name: "success",
    color: {
      h: 142,
      s: 38,
      l: 28,
    },
  },
  {
    name: "error",
    color: {
      h: 350,
      s: 88,
      l: 57,
    },
  },
  {
    name: "warning",
    color: {
      h: 22,
      s: 83,
      l: 50,
    },
  },
  {
    name: "default",
    color: {
      h: 218,
      s: 58,
      l: 58,
    },
  },
];

interface ColorBuilder {
  greySaturation: number;
  initialGreyLightness: number;
  greyscaleLightnessIncrement: number;
}

export const colorBuilder = ({
  greySaturation,
  initialGreyLightness,
  greyscaleLightnessIncrement,
}: ColorBuilder) => `/* Color */
    --greySaturation: ${greySaturation}%;
    --initialGreyLightness: ${initialGreyLightness}%;
    --greyscaleLightnessIncrement: ${greyscaleLightnessIncrement}%;
${colors.map((color) => generateColorScales(color)).join("")}
${getAccentGreys(initialGreyLightness, greyscaleLightnessIncrement)}
    --c-border: var(--c-grey5);
`;

interface ColorKeys {
  transparent: string;
  border: string;
  grey: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
  [key: string]: string | object;
}

export const tailwindColors = () => {
  const obj: ColorKeys = {
    transparent: "transparent",
    border: "hsl(var(--c-border) / <alpha-value>)",
    grey: {
      100: `hsl(var(--c-grey1) / <alpha-value>)`,
      200: `hsl(var(--c-grey2) / <alpha-value>)`,
      300: `hsl(var(--c-grey3) / <alpha-value>)`,
      400: `hsl(var(--c-grey4) / <alpha-value>)`,
      500: `hsl(var(--c-grey5) / <alpha-value>)`,
      600: `hsl(var(--c-grey6) / <alpha-value>)`,
      700: `hsl(var(--c-grey7) / <alpha-value>)`,
      800: `hsl(var(--c-grey8) / <alpha-value>)`,
    },
  };

  colors.forEach((color) => {
    obj[color.name] = `hsl(var(--c-${color.name}) / <alpha-value>)`;
    obj[`${color.name}-contrasted`] = `hsl(var(--c-${color.name}-contrasted) / <alpha-value>)`;
  });

  return obj;
};
