import { Styles } from '../../interfaces'
import DEFAULT_THEME from '../themes/tailwind'
import { keywordOrJIT } from './utils/keywordOrJIT'
import { color } from './utils/tailwindColor'

const fontSizeKeywords = new Map<string, string>()
const lineHeightKeywords = new Map<string, string>()
const fontWeightKeywords = new Map<string, string>()
const letterSpacingKeywords = new Map<string, string>()

const theme = DEFAULT_THEME

for (const [keyword, value] of Object.entries(theme.lineHeight ?? {})) {
  lineHeightKeywords.set(value, keyword)
}

for (const [keyword, value] of Object.entries(theme.letterSpacing ?? {})) {
  letterSpacingKeywords.set(value, keyword)
}

for (const [keyword, value] of Object.entries(theme.fontWeight ?? {})) {
  fontWeightKeywords.set(value, keyword)
}

for (const [keyword, value] of Object.entries(theme.fontSize ?? {})) {
  fontSizeKeywords.set(value[0] as string, keyword)
}

function lineHeightPx(value: number): string {
  return keywordOrJIT(lineHeightKeywords, `${value / 16}rem`)
}

function lineHeightPercent(value: number): string {
  return keywordOrJIT(lineHeightKeywords, `${value / 100}`)
}

function letterSpacingPercent(value: number): string {
  return keywordOrJIT(letterSpacingKeywords, `${value / 100}em`)
}

function fontWeight(value: number): string {
  return keywordOrJIT(fontWeightKeywords, `${value}`)
}

function fontSizeName(value: number): string {
  return keywordOrJIT(fontSizeKeywords, `${value / 16}rem`)
}

export default function textClasses(styleConfig: Styles): string {
  const classes: string[] = []

  if ('textAlign' in styleConfig && styleConfig.textAlign.defined) {
    classes.push(
      (() => {
        switch (styleConfig.textAlign.value) {
          case 'center':
            return 'text-center'
          case 'justify':
            return 'text-justify'
          case 'left':
            return 'text-left'
          case 'right':
            return 'text-right'
          default:
            return ''
        }
      })(),
    )
  }

  if (styleConfig.textTransform && styleConfig.textTransform.defined) {
    classes.push(
      (() => {
        switch (styleConfig.textTransform.value) {
          case 'uppercase':
            return 'uppercase'
          case 'lowercase':
            return 'lowercase'
          case 'none':
            return 'normal-case'
          case 'capitalize':
            return 'capitalize'
          default:
            return ''
        }
      })(),
    )
  }

  if (styleConfig.textDecoration && styleConfig.textDecoration.defined) {
    classes.push(
      (() => {
        switch (styleConfig.textDecoration.value) {
          case 'underline':
            return 'underline'
          case 'line-through':
            return 'line-through'
          case 'none':
            return 'no-underline'
          default:
            return ''
        }
      })(),
    )
  }

  if (styleConfig.textOverflow && styleConfig.textOverflow.defined) {
    classes.push(
      (() => {
        switch (styleConfig.textOverflow.value) {
          case 'clip':
            return 'clip'
          case 'ellipsis':
            return 'ellipsis'
          case 'truncate':
            return 'truncate'
          default:
            return ''
        }
      })(),
    )
  }

  if (styleConfig.fontWeight && styleConfig.fontWeight.defined) {
    classes.push(`font${fontWeight(styleConfig.fontWeight.value as number)}`)
  }

  if (styleConfig.fontSize && styleConfig.fontSize.defined) {
    classes.push(`text${fontSizeName(styleConfig.fontSize.value as number)}`)
  }

  if (styleConfig.fontFamily && styleConfig.fontFamily.defined) {
    classes.push(`font-[${styleConfig.fontFamily.value}]`)
  }

  if (styleConfig.color && styleConfig.color.defined) {
    classes.push(`text${color(styleConfig.color.value.hexString)}`)
  }

  if (styleConfig.lineHeight && styleConfig.lineHeight.defined) {
    if (styleConfig.lineHeight.unit === '%') {
      classes.push(`leading${lineHeightPercent(styleConfig.lineHeight.value as number)}`)
    } else {
      classes.push(`leading${lineHeightPx(styleConfig.lineHeight.value as number)}`)
    }
  }

  if (styleConfig.letterSpacing && styleConfig.letterSpacing.defined) {
    if (styleConfig.letterSpacing.unit === '%') {
      classes.push(`tracking${letterSpacingPercent(styleConfig.letterSpacing.value as number)}`)
    } else {
      classes.push(`tracking-[${styleConfig.letterSpacing.value}px]`)
    }
  }

  return classes.join(' ').trim()
}
