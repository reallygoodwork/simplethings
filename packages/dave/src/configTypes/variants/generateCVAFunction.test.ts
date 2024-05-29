import { generateCVAFunction } from './generateCVAFunction'

describe('generateCVAFunction', () => {

  const mockVariants = [{
    name: 'test',
    options: ['option1', 'option2'],
    defaultValue: 'option1'
  }]

  const mockCompoundVariants = [
    {
      color: 'primary',
      vibe: 'none',
      styles: {
        fontSize: 'fz__sm',
      },
      className: 'default',
    },
  ]


  it('it should return a string of the compound variant function', () => {
    expect(generateCVAFunction('badge', mockVariants, mockCompoundVariants)).toStrictEqual({
      variantProps: ['test'],
      defaultVariants: {
        test: 'option1'
      },
      compoundVariants: [{
        color: 'primary',
        vibe: 'none',
        className: 'badge-default',
      }],
      variants: {
        test: {
          option1: '',
          option2: '',
        }
      }
    })
  })
})