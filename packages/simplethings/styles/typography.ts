export const typography = [
  {
    "name": "st-body",
    "fontSize": "16px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "22px",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-hero",
    "fontSize": "72px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "-1px",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-caption",
    "fontSize": "12px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "16px",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-small",
    "fontSize": "14px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "20px",
    "letterSpacing": "0",
    "fontWeight": 400,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-heading--bold",
    "fontSize": "18px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "24px",
    "letterSpacing": "0",
    "fontWeight": 700,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-heading",
    "fontSize": "18px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "24px",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-lead--tight",
    "fontSize": "20px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "22px",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-lead",
    "fontSize": "20px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "24px",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-title",
    "fontSize": "48px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "-1px",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-subtitle",
    "fontSize": "24px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "32px",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-large",
    "fontSize": "36px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "40px",
    "letterSpacing": "-0px",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-input-small",
    "fontSize": "14px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-input",
    "fontSize": "16px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "100%",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-label-small",
    "fontSize": "14px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "125%",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  },
  {
    "name": "st-label",
    "fontSize": "16px",
    "fontFamily": "Satoshi Variable",
    "lineHeight": "20px",
    "letterSpacing": "0",
    "fontWeight": 500,
    "textDecoration": "none",
    "textTransform": "none"
  }
]

export const generateTypography = (textStyles: any[]): string => {
  let typo = ''
  textStyles.forEach((textStyle) => {
    typo += `
.${textStyle.name} {
  font-family: ${textStyle.fontFamily};
  font-size: ${textStyle.fontSize};
  line-height: ${textStyle.lineHeight};
  letter-spacing: ${textStyle.letterSpacing};
  font-weight: ${textStyle.fontWeight};
  text-decoration: ${textStyle.textDecoration};
  text-transform: ${textStyle.textTransform};
}
    `
  })
  return typo
}