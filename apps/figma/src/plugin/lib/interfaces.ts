type colorFormatType = 'HEX' | 'RGB' | 'RGBA' | 'GRADIENT'
type units = 'px' | '%' | 'auto' | 'em' | 'rel'
type valueType = 'NUMBER' | 'STRING'
type Usage = 'ALL' | 'TEXT' | 'NOTTEXT' | 'FILL'

type ValueInterface = {
  value: number
  unit: units
  type: valueType
  default: number
  defined: boolean
  canBeInherited: boolean
}

export interface BorderColorInterface {
  value: {
    top: ColorValueType
    right: ColorValueType
    bottom: ColorValueType
    left: ColorValueType
  }
  type: string
  default: string
  colorFormat: colorFormatType
  usage: Usage
  defined: boolean
  hasChildStyles: boolean
  canBeInherited: boolean
}

export interface BorderRadiusValue extends StyleInterface {
  value: {
    topLeft: ValueInterface
    topRight: ValueInterface
    bottomLeft: ValueInterface
    bottomRight: ValueInterface
  }
}

export interface BorderWidthInterface extends StyleInterface {
  value: {
    top: ValueInterface
    right: ValueInterface
    bottom: ValueInterface
    left: ValueInterface
  }
}

export interface CSSStyles {
  breakpoint: number
  styleString: string
  styleObject: Record<string, any>
  tailwindStyleString: string
}

export type ColorValueType = {
  gradientString?: string
  gradientConfig?: {
    stops: {
      color: string
      position: number
    }[]
    type: 'linear' | 'radial'
    angle: number
  }
  hexString: string
  rgbString: string
  rgba: {
    r: number
    g: number
    b: number
    a: number
  }
  alpha: number
}

export interface NodeStructure {
  typography: TypographyGuide[]
  fonts: { family: string; style: string }[]
  colors: string[]
  markup: SFNode
}

export interface PaddingInterface extends StyleInterface {
  value: {
    top: ValueInterface
    right: ValueInterface
    bottom: ValueInterface
    left: ValueInterface
  }
}

export interface SFNode {
  id: string
  normalizedName: string
  originalName: string
  figmaType: SceneNode['type']
  elementType: string
  isComponent: boolean
  isRootComponent: boolean
  imageWidth?: number
  imageHeight?: number
  tagName?: string
  dataURL?: string | null
  hast?: any
  initialLocation: {
    x: number
    y: number
    width: number
    height: number
  }
  properties?: {
    viewBox: string
    tagName: string
    width: number
    height: number
    fill: string
    d: string
    children: svgProperties[]
  }
  variantProperties?: {
    mainComponentId: string
    mainComponentType: SceneNode['type']
    mainComponentNormalizedName: string
    mainComponentProperties: Record<string, any>
  }
  parent: {
    parentId: string
    parentNormalizedName: string
    parentOriginalName: string
  }
  content?: string[]
  children: SFNode[]
  styleConfig: Styles[]
  style: CSSStyles[]
}

export interface StyleInterface {
  value: Record<string, StyleInterface> | string | number | ColorValueType
  unit?: string
  type: valueType
  options?: string[] | number[]
  usage?: Usage
  default: string | number
  defined: boolean
  hasChildStyles?: boolean
  canBeInherited: boolean
}

export interface Styles {
  breakpoint: number | 'default'
  display: typeof display
  height: typeof height
  width: typeof width
  maxWidth: typeof width
  padding: typeof padding
  overflow: typeof overflow
  flexDirection: typeof flexDirection
  flexGrow: typeof flexGrow
  justifyContent: typeof justifyContent
  justifySelf: typeof justifySelf
  alignItems: typeof alignItems
  alignSelf: typeof alignSelf
  gap: typeof gap
  objectFit: typeof objectFit
  background: typeof background
  position: typeof position
  top: typeof top
  bottom: typeof bottom
  left: typeof left
  right: typeof right
  color: typeof color
  fontSize: typeof fontSize
  fontWeight: typeof fontWeight
  fontStyle: typeof fontStyle
  fontFamily: typeof fontFamily
  lineHeight: typeof lineHeight
  textAlign: typeof textAlign
  textTransform: typeof textTransform
  textDecoration: typeof textDecoration
  textOverflow: typeof textOverflow
  letterSpacing: typeof letterSpacing
  borderStyle: typeof borderStyle
  borderColor: typeof borderColor
  borderWidth: typeof borderWidth
  borderRadius: typeof borderRadius
}

export interface TypographyGuide {
  family: string
  size: string
  letterSpacing: string
  lineHeight: string
  textDecoration: string
  weight: number
}

export const alignItems: StyleInterface = {
  value: 'normal',
  type: 'STRING',
  options: ['normal', 'center', 'flex-end', 'flex-start', 'space-around'],
  usage: 'ALL',
  default: 'normal',
  defined: false,
  canBeInherited: false,
}

export const alignSelf: StyleInterface = {
  value: 'auto',
  type: 'STRING',
  options: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const background: colorType = {
  value: {
    gradientString: '',
    gradientConfig: {
      stops: [],
      type: 'linear',
      angle: 0,
    },
    hexString: '#000000',
    rgbString: 'rgb(0, 0, 0)',
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    alpha: 0,
  },
  type: 'STRING',
  colorFormat: 'HEX',
  defined: false,
  usage: 'ALL',
  default: {
    gradientString: '',
    gradientConfig: {
      stops: [],
      type: 'linear',
      angle: 0,
    },
    hexString: '#000000',
    rgbString: 'rgb(0, 0, 0)',
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    alpha: 0,
  },
  hasChildStyles: false,
  canBeInherited: false,
}

export const borderColor: BorderColorInterface = {
  value: {
    top: {
      hexString: '#000000',
      rgbString: 'rgb(0, 0, 0)',
      rgba: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
      alpha: 0,
    },
    right: {
      hexString: '#000000',
      rgbString: 'rgb(0, 0, 0)',
      rgba: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
      alpha: 0,
    },
    bottom: {
      hexString: '#000000',
      rgbString: 'rgb(0, 0, 0)',
      rgba: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
      alpha: 0,
    },
    left: {
      hexString: '#000000',
      rgbString: 'rgb(0, 0, 0)',
      rgba: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
      alpha: 0,
    },
  },
  type: 'STRING',
  default: 'solid',
  colorFormat: 'HEX',
  usage: 'ALL',
  defined: false,
  hasChildStyles: false,
  canBeInherited: false,
}

export const borderRadius: BorderRadiusValue = {
  value: {
    topLeft: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    topRight: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    bottomLeft: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    bottomRight: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
  },
  type: 'NUMBER',
  default: '0',
  usage: 'ALL',
  defined: false,
  hasChildStyles: false,
  canBeInherited: false,
}

export const borderStyle: StyleInterface = {
  value: {
    top: {
      value: 'solid',
      type: 'STRING',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    right: {
      value: 'solid',
      type: 'STRING',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    bottom: {
      value: 'solid',
      type: 'STRING',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    left: {
      value: 'solid',
      type: 'STRING',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
  },
  options: ['solid', 'dashed', 'dotted'],
  type: 'STRING',
  default: 'solid',
  usage: 'ALL',
  defined: false,
  hasChildStyles: false,
  canBeInherited: false,
}

export const borderWidth: BorderWidthInterface = {
  value: {
    top: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    right: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    bottom: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    left: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
  },
  type: 'NUMBER',
  default: 'solid',
  usage: 'ALL',
  defined: false,
  hasChildStyles: false,
  canBeInherited: false,
}

export const bottom: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const color: colorType = {
  value: {
    hexString: '#000000',
    rgbString: 'rgb(0, 0, 0)',
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    alpha: 0,
  },
  type: 'STRING',
  colorFormat: 'HEX',
  defined: false,
  usage: 'ALL',
  default: {
    gradientString: '',
    gradientConfig: {
      stops: [],
      type: 'linear',
      angle: 0,
    },
    hexString: '#000000',
    rgbString: 'rgb(0, 0, 0)',
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    alpha: 0,
  },
  hasChildStyles: false,
  canBeInherited: true,
}

export interface colorType {
  value: ColorValueType
  type: valueType
  colorFormat: colorFormatType
  usage: Usage
  defined: boolean
  default: {
    gradientString?: string
    gradientConfig?: {
      stops: {
        color: string
        position: number
      }[]
      type: 'linear' | 'radial'
      angle: number
    }
    hexString: string
    rgbString: string
    rgba: {
      r: number
      g: number
      b: number
      a: number
    }
    alpha: number
  }
  hasChildStyles: boolean
  canBeInherited: boolean
}

export const display: StyleInterface = {
  value: 'block',
  type: 'STRING',
  options: [
    'flex',
    'inline-flex',
    'block',
    'inline-block',
    'inline',
    'grid',
    'inline-grid',
    'table',
    'inline-table',
    'none',
  ],
  usage: 'ALL',
  default: 'block',
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const flexDirection: StyleInterface = {
  value: 'row',
  type: 'STRING',
  options: ['row', 'row-reverse', 'column', 'column-reverse'],
  usage: 'ALL',
  default: 'row',
  defined: false,
  canBeInherited: false,
}

export const flexGrow: StyleInterface = {
  value: 0,
  type: 'NUMBER',
  usage: 'ALL',
  default: 0,
  defined: false,
  canBeInherited: false,
}

export const fontFamily: StyleInterface = {
  value: 'sans-serif',
  type: 'STRING',
  usage: 'ALL',
  default: 'sans-serif',
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const fontSize: StyleInterface = {
  value: 16,
  unit: 'px',
  type: 'NUMBER',
  usage: 'ALL',
  default: 16,
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const fontStyle: StyleInterface = {
  value: 'normal',
  type: 'STRING',
  options: ['normal', 'italic', 'oblique'],
  usage: 'ALL',
  default: 'normal',
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const fontWeight: StyleInterface = {
  value: 400,
  type: 'NUMBER',
  options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  usage: 'ALL',
  default: 400,
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const gap: StyleInterface = {
  value: 0,
  unit: 'px',
  type: 'NUMBER',
  usage: 'ALL',
  default: 0,
  defined: false,
  canBeInherited: false,
}

export const height: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const justifyContent: StyleInterface = {
  value: 'flex-start',
  type: 'STRING',
  options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
  usage: 'ALL',
  default: 'flex-start',
  defined: false,
  canBeInherited: false,
}

export const justifySelf: StyleInterface = {
  value: 'auto',
  type: 'STRING',
  options: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const left: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const letterSpacing: StyleInterface = {
  value: 0,
  unit: 'px',
  type: 'NUMBER',
  usage: 'ALL',
  default: 0,
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const lineHeight: StyleInterface = {
  value: 1.5,
  type: 'NUMBER',
  usage: 'ALL',
  default: 1.5,
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const maxWidth: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const maxHeight: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const objectFit: StyleInterface = {
  value: 'fill',
  type: 'STRING',
  options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  usage: 'FILL',
  default: 'fill',
  defined: false,
  canBeInherited: false,
}

export const overflow: StyleInterface = {
  value: 'auto',
  type: 'STRING',
  options: ['visible', 'hidden', 'scroll', 'auto'],
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const padding: PaddingInterface = {
  value: {
    top: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    right: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    bottom: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
    left: {
      value: 0,
      unit: 'px',
      type: 'NUMBER',
      default: 0,
      defined: false,
      canBeInherited: false,
    },
  },
  type: 'STRING',
  default: 'auto',
  usage: 'ALL',
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const position: StyleInterface = {
  value: 'static',
  type: 'STRING',
  options: ['relative', 'absolute', 'fixed', 'sticky', 'static'],
  usage: 'ALL',
  default: 'static',
  defined: false,
  canBeInherited: false,
}

export const right: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export interface svgProperties {
  type: string
  tagName: string
  width: number
  height: number
  fill: string
  properties: any
  children: svgProperties[]
}

export const textAlign: StyleInterface = {
  value: 'left',
  type: 'STRING',
  options: ['left', 'right', 'center', 'justify'],
  usage: 'ALL',
  default: 'left',
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const textDecoration: StyleInterface = {
  value: 'none',
  type: 'STRING',
  options: ['none', 'underline', 'line-through', 'overline'],
  usage: 'ALL',
  default: 'none',
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const textOverflow: StyleInterface = {
  value: 'clip',
  type: 'STRING',
  options: ['clip', 'ellipsis'],
  usage: 'ALL',
  default: 'clip',
  defined: false,
  hasChildStyles: false,
  canBeInherited: true,
}

export const textTransform: StyleInterface = {
  value: 'none',
  type: 'STRING',
  options: ['none', 'capitalize', 'uppercase', 'lowercase'],
  usage: 'ALL',
  default: 'none',
  defined: false,

  hasChildStyles: false,
  canBeInherited: true,
}

export const top: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export const units = {
  PIXELS: 'px',
  PERCENT: '%',
  AUTO: 'auto',
  EM: 'em',
  REL: 'rel',
}

export const width: StyleInterface = {
  value: 'auto',
  unit: 'auto',
  type: 'NUMBER',
  usage: 'ALL',
  default: 'auto',
  defined: false,
  canBeInherited: false,
}

export default {
  display,
  height,
  width,
  maxWidth,
  maxHeight,
  padding,
  overflow,
  flexDirection,
  flexGrow,
  justifyContent,
  justifySelf,
  alignItems,
  alignSelf,
  gap,
  objectFit,
  background,
  position,
  top,
  bottom,
  left,
  right,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  fontFamily,
  lineHeight,
  textAlign,
  textTransform,
  textDecoration,
  textOverflow,
  letterSpacing,
  borderColor,
  borderWidth,
  borderRadius,
  borderStyle,
}
