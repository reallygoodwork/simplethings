import { Styles } from './interfaces'

/**
 * @param paddingConfig - The padding config object
 * @param node - The node to get the padding from
 * @returns The padding config object
 * */
export function padding(paddingConfig: Styles['padding'], node: SceneNode): Styles['padding'] {
  if ('paddingTop' in node) {
    const { paddingTop, paddingRight, paddingBottom, paddingLeft } = node
    if (paddingTop === paddingRight && paddingTop === paddingBottom && paddingTop === paddingLeft) {
      return {
        ...paddingConfig,
        defined: true,
        value: {
          // @ts-ignore
          ...paddingConfig.value,
          top: {
            ...paddingConfig.value.top,
            value: parseInt(paddingTop.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          right: {
            ...paddingConfig.value.right,
            value: parseInt(paddingTop.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          bottom: {
            ...paddingConfig.value.bottom,
            value: parseInt(paddingTop.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          left: {
            ...paddingConfig.value.left,
            value: parseInt(paddingTop.toFixed(0)),
            unit: 'px',
            defined: true,
          },
        },
      }
    } else {
      return {
        ...paddingConfig,
        defined: true,
        value: {
          // @ts-ignore
          ...paddingConfig['value'],
          top: {
            ...paddingConfig.value.top,
            value: parseInt(paddingTop.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          right: {
            ...paddingConfig.value.right,
            value: parseInt(paddingRight.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          bottom: {
            ...paddingConfig.value.bottom,
            value: parseInt(paddingBottom.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          left: {
            ...paddingConfig.value.left,
            value: parseInt(paddingLeft.toFixed(0)),
            unit: 'px',
            defined: true,
          },
        },
      }
    }
  } else {
    return {
      ...paddingConfig,
      defined: false,
    }
  }
}
