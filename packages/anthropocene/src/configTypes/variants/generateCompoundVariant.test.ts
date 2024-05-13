import { generateCompoundVariantObject } from './generateCVAFunction'

describe('generateCompoundVariant', () => {
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
    expect(generateCompoundVariantObject('badge', mockCompoundVariants)).toStrictEqual([
      ['badge-default', { fontSize: 'fz__sm' }, { className: 'badge-default', color: 'primary', vibe: 'none' }],
    ])
  })

  it('it should return a className', () => {
    const variant = generateCompoundVariantObject('badge', mockCompoundVariants)
    const className = (variant as [string, unknown, unknown])[0][0]
    expect(className).toBe('badge-default')
  })

  it('it should return a className with the name prefixed', () => {
    const variant = generateCompoundVariantObject('badge', mockCompoundVariants)
    const className = (variant as [string, unknown, unknown])[0][0]
    expect(className).not.toBe('default')
  })

  it('it should return a styles object', () => {
    const variant = generateCompoundVariantObject('badge', mockCompoundVariants)
    const styles = (variant as [string, unknown, unknown])[0][1]
    expect(styles).toStrictEqual({ fontSize: 'fz__sm' })
  })

  it('it should return a compound variant object', () => {
    const variant = generateCompoundVariantObject('badge', mockCompoundVariants)
    const compoundVariantObject = (variant as [string, unknown, unknown])[0][2]
    expect(compoundVariantObject).toStrictEqual({ className: 'badge-default', color: 'primary', vibe: 'none' })
  })

  it('it should return the same classname as the compound variant object', () => {
    const variant = generateCompoundVariantObject('badge', mockCompoundVariants)
    const className = (variant as [string, unknown, unknown])[0][0]
    const variantClassName = (variant as any)[0][2].className
    expect(className).toBe(variantClassName)
  })
})
