import { Styles } from './interfaces'

export function borderRadius(borderRadiusConfig: Styles['borderRadius'], node: SceneNode): Styles['borderRadius'] {
  if ('topLeftRadius' in node) {
    const { topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius } = node
    if (
      topLeftRadius !== 0 &&
      topLeftRadius === topRightRadius &&
      topLeftRadius === bottomLeftRadius &&
      topLeftRadius === bottomRightRadius
    ) {
      return {
        ...borderRadiusConfig,
        defined: true,
        value: {
          // @ts-ignore
          ...borderRadiusConfig['value'],
          topLeft: {
            ...borderRadiusConfig.value['topLeft'],
            value: parseInt(topLeftRadius.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          topRight: {
            ...borderRadiusConfig.value['topRight'],
            value: parseInt(topLeftRadius.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          bottomLeft: {
            ...borderRadiusConfig.value['bottomLeft'],
            value: parseInt(topLeftRadius.toFixed(0)),
            unit: 'px',
            defined: true,
          },
          bottomRight: {
            ...borderRadiusConfig.value['bottomRight'],
            value: parseInt(topLeftRadius.toFixed(0)),
            unit: 'px',
            defined: true,
          },
        },
      }
    } else {
      return {
        ...borderRadiusConfig,
        defined: true,
        value: {
          // @ts-ignore
          ...borderRadiusConfig['value'],
          topLeft: {
            ...borderRadiusConfig.value['topLeft'],
            value: parseInt(topLeftRadius.toFixed(0)),
            unit: 'px',
            defined: topLeftRadius !== 0,
          },
          topRight: {
            ...borderRadiusConfig.value['topRight'],
            value: parseInt(topRightRadius.toFixed(0)),
            unit: 'px',
            defined: topRightRadius !== 0,
          },
          bottomLeft: {
            ...borderRadiusConfig.value['bottomLeft'],
            value: parseInt(bottomLeftRadius.toFixed(0)),
            unit: 'px',
            defined: bottomLeftRadius !== 0,
          },
          bottomRight: {
            ...borderRadiusConfig.value['bottomRight'],
            value: parseInt(bottomRightRadius.toFixed(0)),
            unit: 'px',
            defined: bottomRightRadius !== 0,
          },
        },
      }
    }
  } else {
    return borderRadiusConfig
  }
}
