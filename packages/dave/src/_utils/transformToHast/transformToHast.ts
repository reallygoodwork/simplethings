import { ConfigObject } from 'src'
import { upperFirst, lowerCase, camelCase } from 'lodash'

import { Element, ElementContent } from 'hast'



const processChildren = (configObject?: ConfigObject[]): ElementContent[] => {
  if (!configObject) {
    return []
  }

  return configObject.map((child) => {
    if (child.type === 'text') {
      return {
        type: 'text',
        value: child.value || '',
      }
    } else {
      return {
        type: 'element',
        tagName: child.tagName || 'div',
        properties: {
          className: child.style?.utilClasses || []
        },
        children: [],
      }
    }
  })

}

// https://github.com/wooorm/html-tag-names

export const transformToHast = (configObject: ConfigObject): Element => {
  const name = camelCase(configObject.name)
  const needsCva = configObject.style?.variants || configObject.style?.baseStyles
  let classes: string[] = []

  if (!needsCva) {
    classes = configObject.style?.utilClasses || []
  } else {
    const cvaProps = configObject.style?.variants?.variantTypes ? Object.keys(configObject.style?.variants?.variantTypes).join(', ') : []
    classes = [`__${name}CVA({ ${cvaProps}, className })__`]
  }



  return {
      type: 'element',
      tagName: configObject.tagName || 'div',
      properties: {
        className: classes
      },
      children: processChildren(configObject.children),
    }

}


// convert to hast here.
// You;re so close!

// next, convert to react
// buildg template for react component from hast, cva

// provide classnames to tailwind css

// {
//   type: 'element',
//   tagName: 'span',
//   properties: {},
//   children: [{type: 'text', value: 'Foxtrot'}]
// }