import { Styles } from '../../interfaces'
import { spacing } from './utils/spacing'

export default function dimensionsClasses(styleConfig: Styles): string {
  const classes: string[] = []

  if (styleConfig.display.defined) {
    classes.push(
      (() => {
        switch (styleConfig.display.value) {
          case 'flex':
            return 'flex'
          case 'inline-flex':
            return 'inline-flex'
          case 'block':
            return 'block'
          case 'inline-block':
            return 'inline-block'
          case 'inline':
            return 'inline'
          case 'none':
            return 'hidden'
          case 'grid':
            return 'grid'
          case 'inline-grid':
            return 'inline-grid'
          case 'table':
            return 'table'
          case 'inline-table':
            return 'inline-table'
        }
      })(),
    )
  }

  if (styleConfig.height.defined) {
    if (styleConfig.height.value === 'auto') {
      classes.push('h-auto')
    } else {
      classes.push(`h${spacing(styleConfig.height.value as number)}`)
    }
  }

  if (styleConfig.width.defined) {
    if (styleConfig.width.value === 'auto') {
      classes.push('w-auto')
    } else {
      classes.push(`w${spacing(styleConfig.width.value as number)}`)
    }
  }

  if (styleConfig.overflow.defined) {
    classes.push(
      (() => {
        switch (styleConfig.overflow.value) {
          case 'visible':
            return 'overflow-visible'
          case 'hidden':
            return 'overflow-hidden'
          case 'scroll':
            return 'overflow-scroll'
          case 'auto':
            return 'overflow-auto'
        }
      })(),
    )
  }

  if (styleConfig.padding.defined) {
    if (
      styleConfig.padding.value.bottom.value === styleConfig.padding.value.left.value &&
      styleConfig.padding.value.bottom.value === styleConfig.padding.value.right.value &&
      styleConfig.padding.value.bottom.value === styleConfig.padding.value.top.value
    ) {
      classes.push(`p${spacing(styleConfig.padding.value.bottom.value)}`)
    } else {
      if (styleConfig.padding.value.top.value === styleConfig.padding.value.bottom.value) {
        classes.push(`py${spacing(styleConfig.padding.value.top.value)}`)
      } else {
        classes.push(`pt${spacing(styleConfig.padding.value.top.value)}`)
        classes.push(`pb${spacing(styleConfig.padding.value.bottom.value)}`)
      }
      if (styleConfig.padding.value.right.value === styleConfig.padding.value.left.value) {
        classes.push(`px${spacing(styleConfig.padding.value.right.value)}`)
      } else {
        classes.push(`pr${spacing(styleConfig.padding.value.right.value)}`)
        classes.push(`pl${spacing(styleConfig.padding.value.left.value)}`)
      }
    }
  }

  return classes.join(' ').trim()
}
