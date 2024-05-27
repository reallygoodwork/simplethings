export const typography = [
  {
    "name": "st-body",
    "fontSize": "16px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "22px",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-hero",
    "fontSize": "72px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "-1.440000057220459px",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-caption",
    "fontSize": "12px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "16px",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-small",
    "fontSize": "14px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "20px",
    "letterSpacing": "0%",
    "fontWeight": "regular",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-heading--bold",
    "fontSize": "18px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "24px",
    "letterSpacing": "0%",
    "fontWeight": "bold",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-heading",
    "fontSize": "18px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "24px",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-lead--tight",
    "fontSize": "20px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "22px",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-lead",
    "fontSize": "20px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "24px",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-title",
    "fontSize": "48px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "-0.9599999785423279px",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-subtitle",
    "fontSize": "24px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "32px",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-large",
    "fontSize": "36px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "40px",
    "letterSpacing": "-0.18000000715255737px",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-input-small",
    "fontSize": "14px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-input",
    "fontSize": "16px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-label-small",
    "fontSize": "14px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "125%",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  },
  {
    "name": "st-label",
    "fontSize": "16px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "20px",
    "letterSpacing": "0%",
    "fontWeight": "medium",
    "textDecoration": "none",
    "textTransform": "original"
  }
]

const fontWeightMap: any = {
  'thin': 100,
  'extraLight': 200,
  'light': 300,
  'regular': 400,
  'medium': 500,
  'semiBold': 600,
  'bold': 700,
  'extrabold': 800,
  'black': 900
}

export const generateTypography = (textStyles: any[]): string => {
  let typo = ''
  textStyles.forEach((textStyle) => {
    typo += `
.${textStyle.name} {
  font-family: ${textStyle.fontFamily};
  font-size: ${textStyle.fontSize};
  line-height: ${textStyle.lineHeight};
  letter-spacing: ${textStyle.letterSpacing};
  font-weight: ${fontWeightMap[textStyle.fontWeight]};
  text-decoration: ${textStyle.textDecoration};
  text-transform: ${textStyle.textTransform};
}
    `
  })
  return typo
}