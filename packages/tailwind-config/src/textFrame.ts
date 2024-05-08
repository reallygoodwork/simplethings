interface TextFrameBuilder {
  frRatio: number;
  frY: number;
}

export const textFrameBuilder = ({ frRatio, frY }: TextFrameBuilder) => {
  return `/* Text Frame */
    --frRatio: ${frRatio};
    --fry: ${frY}em;
    --frx: calc(var(--fry) * var(--frRatio));
    --fr: var(--fry) var(--frx);

    /* Text Frame Fonts */
    --fr-fz-xs: 0.75rem;
    --fr-fz-sm: 0.875rem;
    --fr-fz: 1rem;
    --fr-fz-lg: 1.125rem;

    /* Text Frame Horizontal Spacing */
    --frx: calc(var(--fry) * var(--frRatio));
    --frx-xs: calc(var(--frx) / 2);
    --frx-s: calc(var(--frx) * 0.75);
    --frx-m: var(--frx);
    --frx-l: calc(var(--frx) * 1.25);
    --frx-xl: calc(var(--frx) * 1.5);
    --frx-2xl: calc(var(--frx) * 2);
    --frx-3xl: calc(var(--frx) * 3);
    --frx-4xl: calc(var(--frx) * 4);

    /* Text Frame Vertical Spacing */
    --fry-xs: calc(var(--fry) / 2);
    --fry-s: calc(var(--fry) * 0.75);
    --fry-m: var(--fry);
    --fry-l: calc(var(--fry) * 1.25);
    --fry-xl: calc(var(--fry) * 1.5);
    --fry-2xl: calc(var(--fry) * 2);
    --fry-3xl: calc(var(--fry) * 3);
    --fry-4xl: calc(var(--fry) * 4);

    /* Text Frame Padding */
    --fr: var(--fry) var(--frx);
    --fr-xs: calc(var(--fry) / 2) calc(var(--frx) / 2);
    --fr-s: calc(var(--fry) * 0.75) calc(var(--frx) * 0.75);
    --fr-m: var(--fry) var(--frx);
    --fr-l: calc(var(--fry) * 1.25) calc(var(--frx) * 1.25);
    --fr-xl: calc(var(--fry) * 1.5) calc(var(--frx) * 1.5);
    --fr-2xl: calc(var(--fry) * 2) calc(var(--frx) * 2);
    --fr-3xl: calc(var(--fry) * 3) calc(var(--frx) * 3);
    --fr-4xl: calc(var(--fry) * 4) calc(var(--frx) * 4);
  `;
}

export const tailwindTextFrame = {
  frx: 'var(--frx)',
  fry: 'var(--fry)',
  fr: 'var(--fr)',
  'frx-xs': 'var(--frx-xs)',
  'fry-xs': 'var(--fry-xs)',
  'fr-xs': 'var(--fr-xs)',
  'frx-s': 'var(--frx-s)',
  'fry-s': 'var(--fry-s)',
  'fr-s': 'var(--fr-s)',
  'frx-m': 'var(--frx-m)',
  'fry-m': 'var(--fry-m)',
  'fr-m': 'var(--fr-m)',
  'frx-l': 'var(--frx-l)',
  'fry-l': 'var(--fry-l)',
  'fr-l': 'var(--fr-l)',
  'frx-xl': 'var(--frx-xl)',
  'fry-xl': 'var(--fry-xl)',
  'fr-xl': 'var(--fr-xl)',
  'frx-2xl': 'var(--frx-2xl)',
  'fry-2xl': 'var(--fry-2xl)',
  'fr-2xl': 'var(--fr-2xl)',
  'frx-3xl': 'var(--frx-3xl)',
  'fry-3xl': 'var(--fry-3xl)',
  'fr-3xl': 'var(--fr-3xl)',
  'frx-4xl': 'var(--frx-4xl)',
  'fry-4xl': 'var(--fry-4xl)',
  'fr-4xl': 'var(--fr-4xl)',
}