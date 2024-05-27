import { Styles } from './interfaces'
import dimensionsClasses from './stylelibs/tailwind/dimensions'
import fills from './stylelibs/tailwind/fills'
import layoutClasses from './stylelibs/tailwind/layout'
import positionClasses from './stylelibs/tailwind/positioning'
import stylesClasses from './stylelibs/tailwind/styles'
import textClasses from './stylelibs/tailwind/text'

export function generateTailwindStyleString(styles: Styles[]): string {
  const styleString = []

  styles.forEach((style) => {
    styleString.push(stylesClasses(style))
    styleString.push(textClasses(style))
    styleString.push(dimensionsClasses(style))
    styleString.push(layoutClasses(style))
    styleString.push(positionClasses(style))
    styleString.push(fills(style))
  })

  return styleString.join(' ').trim().replace(/\s+/g, ' ')
}
