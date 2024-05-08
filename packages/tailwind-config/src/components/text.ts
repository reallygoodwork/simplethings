import { cva, type VariantProps } from "class-variance-authority";

export const TextCVA = cva('', {
  variants: {
    level: {
      hero: ["hero"],
      title: ["title"],
      large: ["large"],
      subtitle: ["subtitle"],
      lead: ["lead"],
      'lead-tight': ['lead-tight'],
      body: ["body"],
      small: ["small"],
      caption: ["caption"],
    },
  },
  defaultVariants: {
    level: "body",
  },
})

export interface TextCVAProps extends VariantProps<typeof TextCVA> {}

interface TypographyBuilder {
  headingFontFamily: string;
  bodyFontFamily: string;
}

export const typographyBuilder = ({
  headingFontFamily,
  bodyFontFamily
}: TypographyBuilder) => `/** Typography */
    --baseTextSize: calc(var(--baseUnit) * var(--multiplier) * 1rem);
    --base-ff: "${bodyFontFamily}";
    --heading-ff: var(--fontFamily, "${headingFontFamily}");
    --body-ff: var(--fontFamily, var(--base-ff));

    --base-fz: calc(var(--baseUnit) * var(--multiplier));

    --hero-ff: var(--heading-ff);
    --hero-font-size: 4.5;
    --hero-lh: 1em;
    --hero-fw: 450;
    --hero-ls: -1.44px;
    --hero-fz: calc(var(--base-fz) * var(--hero-font-size));

    --title-ff: var(--heading-ff);
    --title-font-size: 3;
    --title-fz: calc(var(--base-fz) * var(--title-font-size));
    --title-lh: 1em;
    --title-fw: 450;
    --title-ls: -0.96px;

    --large-ff: var(--heading-ff);
    --large-font-size: 2.25;
    --large-fz: calc(var(--base-fz) * var(--large-font-size));
    --large-lh: 2.5rem;
    --large-fw: 450;
    --large-ls: -0.18px;

    --subtitle-ff: var(--base-ff);
    --subtitle-font-size: 1.5;
    --subtitle-fz: calc(var(--base-fz) * var(--subtitle-font-size));
    --subtitle-lh: 2rem;
    --subtitle-fw: 450;
    --subtitle-ls: 0;

    --lead-ff: var(--base-ff);
    --lead-font-size: 1.25;
    --lead-fz: calc(var(--base-fz) * var(--lead-font-size));
    --lead-lh: 1.4;
    --lead-lh-tight: 1.125;
    --lead-fw: 450;
    --lead-ls: 0;

    --body-ff: var(--base-ff);
    --body-font-size: 1;
    --body-fz: calc(var(--base-fz) * var(--body-font-size));
    --body-lh: 1.375;
    --body-fw: 450;
    --body-ls: 0;

    --small-ff: var(--base-ff);
    --small-font-size: 0.875;
    --small-fz: calc(var(--base-fz) * var(--small-font-size));
    --small-lh: 1.2;
    --small-fw: 450;
    --small-ls: 0;

    --caption-ff: var(--base-ff);
    --caption-font-size: 0.75;
    --caption-fz: calc(var(--base-fz) * var(--caption-font-size));
    --caption-lh: 1.25;
    --caption-fw: 450;
    --caption-ls: 0;
`

export const TypographyClasses = `
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
  line-height: var(--lead-lh-tight);
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
`