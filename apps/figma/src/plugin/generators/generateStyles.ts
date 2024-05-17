// import {convertRgbColorToHexColor} from '@create-figma-plugin/utilities'

type UnknownObject = {
  [key: string]: any;
};

export function generateStyles(node: SceneNode): Promise<UnknownObject> {
  return new Promise((resolve) => {
    const styles = {}
    if (
      node.type !== 'COMPONENT' &&
      node.type !== 'FRAME' &&
      node.type !== 'GROUP' &&
      node.type !== 'INSTANCE' &&
      node.type !== 'RECTANGLE' &&
      node.type !== 'TEXT'
    ) {
      resolve({})
    } else {
      // const el = node as
      //   | FrameNode
      //   | GroupNode
      //   | InstanceNode
      //   | ComponentNode
      //   | ComponentSetNode
      //   | RectangleNode
      //   | TextNode
      //   | VectorNode
      //   | EllipseNode
      //   | PolygonNode

      // console.log(el)
      // if (el.layoutSizingHorizontal === 'FIXED') {
      //   styles['width'] = `${node.width}px`
      // }

      // if (el.layoutSizingVertical === 'FIXED') {
      //   styles['height'] = `${node.height}px`
      // }

      // if (el.fills && el.fills.length > 0) {
      //   // styles["backgroundColor"] = convertRgbColorToHexColor(el.fills[0].color);
      // }

      // if (
      //   el.bottomLeftRadius === el.bottomRightRadius &&
      //   el.bottomRightRadius === el.topLeftRadius &&
      //   el.topLeftRadius === el.topRightRadius
      // ) {
      //   styles['borderRadius'] = `${el.topLeftRadius}px`
      // } else if (el.bottomLeftRadius === el.topRightRadius && el.bottomRightRadius === el.topLeftRadius) {
      //   styles['borderRadius'] = `${el.topLeftRadius}px ${el.topRightRadius}px`
      // } else {
      //   styles['borderRadius'] =
      //     `${el.topLeftRadius}px ${el.topRightRadius}px ${el.bottomRightRadius}px ${el.bottomLeftRadius}px`
      // }

      resolve(styles)
    }
  })
}
