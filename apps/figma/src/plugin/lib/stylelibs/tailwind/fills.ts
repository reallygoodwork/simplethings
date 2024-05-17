import { Styles } from '../../interfaces'
import { color } from './utils/tailwindColor'

export default function fillsClasses(styleConfig: Styles): string {
  const classes: string[] = []

  if (styleConfig.background.defined) {
    if (styleConfig.background.colorFormat === 'GRADIENT') {
      const { angle, stops, type } = styleConfig.background.value.gradientConfig
      if (angle === 90) {
        classes.push('bg-gradient-to-r')
      } else if (angle === 180) {
        classes.push('bg-gradient-to-b')
      } else if (angle === 270) {
        classes.push('bg-gradient-to-l')
      } else if (angle === 45) {
        classes.push('bg-gradient-to-tr')
      } else if (angle === 135) {
        classes.push('bg-gradient-to-br')
      } else if (angle === 225) {
        classes.push('bg-gradient-to-bl')
      } else if (angle === 315) {
        classes.push('bg-gradient-to-tl')
      } else {
        classes.push('bg-gradient-to-t')
      }
      stops.forEach((stop, idx) => {
        if (idx === 0) {
          classes.push(`from${color(stop.color)}`)
        } else if (idx === stops.length - 1) {
          classes.push(`to${color(stop.color)}`)
        } else {
          classes.push(`via${color(stop.color)}`)
        }
      })
      // classes.push(`from${color(styleConfig['background'].value.gradientFrom.hex)}`)
      // classes.push(`to${color(styleConfig['background'].value.gradientTo.hex)}`)
    } else {
      classes.push(`bg${color(styleConfig.background.value.hexString)}`)
    }
  }

  if (styleConfig.objectFit.defined) {
    classes.push(
      (() => {
        switch (styleConfig.objectFit.value) {
          case 'fill':
            return 'object-fill'
          case 'contain':
            return 'object-contain'
          case 'cover':
            return 'object-cover'
          case 'none':
            return 'object-none'
          case 'scale-down':
            return 'object-scale-down'
          default:
            return ''
        }
      })(),
    )
  }

  return classes.join(' ').trim()
}
