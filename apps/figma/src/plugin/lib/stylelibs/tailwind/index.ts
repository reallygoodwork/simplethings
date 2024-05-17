import dimensionsClasses from './dimensions'
import fillClasses from './fills'
import layoutStyles from './layout'
import positionClasses from './positioning'
import stylesClasses from './styles'
import textClasses from './text'

export default function manageTailwindClasses(style) {
  const classes: string[] = []
  switch (style.label) {
    case 'Text':
      classes.push(textClasses(style.properties))
      break
    case 'Dimensions':
      classes.push(dimensionsClasses(style.properties))
      break
    case 'Layout':
      classes.push(layoutStyles(style.properties))
      break
    case 'Styles':
      classes.push(stylesClasses(style.properties))
      break
    case 'Position':
      classes.push(positionClasses(style.properties))
      break
    case 'Fill':
      classes.push(fillClasses(style.properties))
      break
    default:
      break
  }

  return classes.join(' ')
}
