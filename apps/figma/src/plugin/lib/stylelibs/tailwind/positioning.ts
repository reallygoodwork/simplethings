import { Styles } from '../../interfaces'
import { spacing } from './utils/spacing'

export default function positionClasses(styleConfig: Styles): string {
  const classes: string[] = []

  if (styleConfig.position.defined) {
    classes.push(
      (() => {
        switch (styleConfig.position.value) {
          case 'absolute':
            return 'absolute'
          case 'relative':
            return 'relative'
          case 'fixed':
            return 'fixed'
          case 'static':
            return 'static'
          default:
            return ''
        }
      })(),
    )
  }

  if (styleConfig.top.defined) {
    classes.push(`top${spacing(styleConfig.top.value as number)}`)
  }

  if (styleConfig.right.defined) {
    classes.push(`right${spacing(styleConfig.right.value as number)}`)
  }

  if (styleConfig.bottom.defined) {
    classes.push(`bottom${spacing(styleConfig.bottom.value as number)}`)
  }

  if (styleConfig.left.defined) {
    classes.push(`left${spacing(styleConfig.left.value as number)}`)
  }

  return classes.join(' ').trim()
}
