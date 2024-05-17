import { StyleProperty } from '@configTypes/shared'
import { kebabCase } from 'lodash'

export const transformStylesToString = (styles: StyleProperty) =>
  new Promise<string>((resolve) => {
    let styleString = ''

    if (!styles) {
      resolve('')
      return
    }

    Object.keys(styles).forEach((style) => {
      // console.log(style)
    })

    // styles.forEach((style) => {
    //   if (!style) {
    //     return
    //   }


    //   const key = Object.keys(style)
    //   styleString += `\n.${key[0]} {\n`



    //   Object.keys(style[key[0]!]!).forEach((prop) => {
    //     if (prop.startsWith('--')) {
    //       styleString += `  ${prop}: ${style[key[0]!]![prop]};\n`
    //     } else {
    //       styleString += `  ${kebabCase(prop)}: ${style[key[0]!]![prop]};\n`
    //     }
    //   })

    //   styleString += '}\n'
    // })
    resolve(styleString)
  })
