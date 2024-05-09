import { zVariables, zVariantObject, convertComponentStyleToCva, ComponentStyle} from '@utils/componentStyle/componentStyle'
import { util } from 'zod'

export const mockComponentStyle: ComponentStyle = {
  baseStyles: {
    fontSize: 'dfsdf',
    paddingBlock: 'glkndfg',
  },
  utilClasses: ['my-4'],
  variants: {
    variantTypes: {
      rounded: [true, false],
      test: ['primary', 'secondary'],
    },
    defaultVariants: {
      rounded: true,
      test: 'primary'
    },
    compoundVariants: [{
      intent: "primary",
      size: "medium",
      variantClassName: "uppercase",
      utilClasses: "py-2",
      styles: {
        fontSize: 'dfsdf',
        paddingInline: '32px'
      },
    }]
  }
}

describe("componentStyle - zVariables", () => {
  it('should parse zVariables with valid format', () => {
    expect(() => zVariables.parse('fz__sm')).not.toThrow()
  })

  it('should throw error when parsing zVariables with invalid string', () => {
    expect(() => zVariables.parse('none')).toThrow()
  })
})

describe("componentStyle - zVariantObject", () => {
  it('should parse zVariantObject with valid format', () => {
    expect(() => zVariantObject.parse({ '--color': 'fz__sm' })).not.toThrow()
  })

  it('should throw error when parsing zVariantObject with invalid string', () => {
    expect(() => zVariantObject.parse({ '--color': 1 })).toThrow()
  })
})

describe("componentStyle - convertComponentStyleToCva", () => {
  it('should convert component style to cva', () => {
    expect(convertComponentStyleToCva('Badge', mockComponentStyle)).toEqual({
      baseStyles: ['badge', 'my-4'],
      variants: {
        variantTypes: {
          test: {
            primary: '',
            secondary: '',
          },
          rounded: {
            true: '',
            false: '',
          }
        },
        defaultVariants: mockComponentStyle.variants.defaultVariants,
        compoundVariants: [
          {
            intent: 'primary',
            size: 'medium',
            className: 'badge-uppercase py-2'
          }
        ]
      }
    })
  })
})
