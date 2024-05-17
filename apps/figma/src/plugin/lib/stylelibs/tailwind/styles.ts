import { Styles } from '../../interfaces'
import DEFAULT_THEME from '../themes/tailwind'
import { keywordOrJIT } from './utils/keywordOrJIT'
import { color } from './utils/tailwindColor'

const theme = DEFAULT_THEME

const borderWidthKeywords = new Map<string, string>()
const borderRadiusKeywords = new Map<string, string>()

for (const [keyword, value] of Object.entries(theme.borderWidth ?? {})) {
  borderWidthKeywords.set(value, keyword)
}

for (const [keyword, value] of Object.entries(theme.borderRadius ?? {})) {
  borderRadiusKeywords.set(value, keyword)
}

function borderWidth(value: number): string {
  return keywordOrJIT(borderWidthKeywords, `${value}px`)
}

function borderRadius(value: number): string {
  return keywordOrJIT(borderRadiusKeywords, `${value / 16}rem`)
}

export default function stylesClasses(styleConfig: Styles): string {
  const classes: string[] = []

  if (styleConfig.borderRadius.defined) {
    if (
      styleConfig.borderRadius.value.bottomLeft.value === styleConfig.borderRadius.value.topLeft.value &&
      styleConfig.borderRadius.value.bottomLeft.value === styleConfig.borderRadius.value.bottomRight.value &&
      styleConfig.borderRadius.value.bottomLeft.value === styleConfig.borderRadius.value.topRight.value
    ) {
      classes.push(`rounded${borderRadius(styleConfig.borderRadius.value.bottomLeft.value)}`)
    } else {
      if (styleConfig.borderRadius.value.topLeft) {
        classes.push(`rounded-tl${borderRadius(styleConfig.borderRadius.value.topLeft.value)}`)
      }
      if (styleConfig.borderRadius.value.topRight) {
        classes.push(`rounded-tr${borderRadius(styleConfig.borderRadius.value.topRight.value)}`)
      }
      if (styleConfig.borderRadius.value.bottomRight) {
        classes.push(`rounded-br${borderRadius(styleConfig.borderRadius.value.bottomRight.value)}`)
      }
      if (styleConfig.borderRadius.value.bottomLeft) {
        classes.push(`rounded-bl${borderRadius(styleConfig.borderRadius.value.bottomLeft.value)}`)
      }
    }
  }

  if (styleConfig.borderStyle.defined) {
    classes.push(
      (() => {
        switch (styleConfig.borderStyle.value) {
          case 'solid':
            return 'border-solid'
          case 'dashed':
            return 'border-dashed'
          case 'dotted':
            return 'border-dotted'
          default:
            return ''
        }
      })(),
    )
  }

  if (styleConfig.borderWidth.defined) {
    if (
      styleConfig.borderWidth.value.top.value === styleConfig.borderWidth.value.left.value &&
      styleConfig.borderWidth.value.top.value === styleConfig.borderWidth.value.right.value &&
      styleConfig.borderWidth.value.top.value === styleConfig.borderWidth.value.bottom.value
    ) {
      classes.push(`border${borderWidth(styleConfig.borderWidth.value.top.value)}`)
    } else {
      if (styleConfig.borderWidth.value.top) {
        classes.push(`border-t${borderWidth(styleConfig.borderWidth.value.top.value)}`)
      }
      if (styleConfig.borderWidth.value.left) {
        classes.push(`border-l${borderWidth(styleConfig.borderWidth.value.left.value)}`)
      }
      if (styleConfig.borderWidth.value.right) {
        classes.push(`border-r${borderWidth(styleConfig.borderWidth.value.right.value)}`)
      }
      if (styleConfig.borderWidth.value.bottom) {
        classes.push(`border-b${borderWidth(styleConfig.borderWidth.value.bottom.value)}`)
      }
    }
  }

  if (styleConfig.borderColor.defined) {
    classes.push(`border${color(styleConfig.borderColor.value.top.hexString)}`)
  }

  return classes.join(' ').trim()
}
