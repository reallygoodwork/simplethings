import { generateDefaultVariantObject } from "./generateCVAFunction"

describe('generateDefaultVariantObject', () => {
  it('returns a default variant object', () => {
    expect(generateDefaultVariantObject([{
      name: 'test',
      options: ['option1', 'option2'],
      defaultValue: 'option1'
    }])).toStrictEqual({
      test: 'option1'
    })
  })

  it('returns a default variant object with multiple defaults', () => {
    expect(generateDefaultVariantObject([{
      name: 'test',
      options: ['option1', 'option2'],
      defaultValue: 'option1'
    }, {
      name: 'size',
      options: ['small', 'large'],
      defaultValue: 'small'
    }])).toStrictEqual({
      test: 'option1',
      size: 'small'
    })
  })
})