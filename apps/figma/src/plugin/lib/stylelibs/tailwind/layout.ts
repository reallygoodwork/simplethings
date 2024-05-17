import { Styles } from '../../interfaces'
import { spacing } from './utils/spacing'

export default function layoutStyles(styleConfig: Styles): string {
  const classes: string[] = []

  if (styleConfig.flexDirection.defined) {
    classes.push(
      (() => {
        switch (styleConfig.flexDirection.value) {
          case 'row':
            return 'flex-row'
          case 'row-reverse':
            return 'flex-row-reverse'
          case 'column':
            return 'flex-col'
          case 'column-reverse':
            return 'flex-row-reverse'
        }
      })(),
    )
  }

  if (styleConfig.gap.defined) {
    classes.push(`gap${spacing(styleConfig.gap.value as number)}`)
  }

  if (styleConfig.justifyContent.defined) {
    classes.push(
      (() => {
        switch (styleConfig.justifyContent.value) {
          case 'center':
            return 'justify-center'
          case 'flex-end':
            return 'justify-end'
          case 'flex-start':
            return 'justify-start'
          case 'space-between':
            return 'justify-between'
        }
      })(),
    )
  }

  if (styleConfig.alignItems.defined) {
    classes.push(
      (() => {
        switch (styleConfig.alignItems.value) {
          case 'center':
            return 'items-center'
          case 'flex-end':
            return 'items-end'
          case 'flex-start':
            return 'items-start'
          case 'baseline':
            return 'items-baseline'
        }
      })(),
    )
  }

  if (styleConfig.alignSelf.defined) {
    classes.push(
      (() => {
        switch (styleConfig.alignSelf.value) {
          case 'center':
            return 'self-center'
          case 'flex-end':
            return 'self-end'
          case 'flex-start':
            return 'self-start'
          case 'stretch':
            return 'self-stretch'
          case 'baseline':
            return 'self-baseline'
        }
      })(),
    )
  }

  // if (styleConfig?.defined) {
  //   classes.push(
  //     (() => {
  //       switch (styleConfig['flex-wrap'].value) {
  //         case 'wrap':
  //           return 'flex-wrap'
  //         case 'wrap-reverse':
  //           return 'flex-wrap-reverse'
  //       }
  //     })(),
  //   )
  // }

  if (styleConfig.flexGrow.defined) {
    classes.push(`grow${spacing(styleConfig.flexGrow.value as number)}`)
  }

  if (styleConfig.justifySelf.defined) {
    classes.push(
      (() => {
        switch (styleConfig.justifySelf.value) {
          case 'center':
            return 'justify-self-center'
          case 'flex-end':
            return 'justify-self-end'
          case 'flex-start':
            return 'justify-self-start'
          case 'stretch':
            return 'justify-self-stretch'
        }
      })(),
    )
  }

  return classes.join(' ').trim()
}
