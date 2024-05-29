import {generateVariantObject} from './generateCVAFunction'

describe('generateVariantObject', () => {
  it('returns a variant object', () => {
    expect(generateVariantObject([{
      name: 'test',
      options: ['option1', 'option2'],
      defaultValue: 'option1'
    }])).toStrictEqual({
      test: {
        option1: '',
        option2: '',
      }
    })
  })

  it('returns a variant object with options as an object', () => {
    expect(generateVariantObject([{
      name: 'test',
      options: ['option1', { option2: 'py-2' }],
      defaultValue: 'option1'
    }])).toStrictEqual({
      test: {
        option1: '',
        option2: 'py-2',
      }
    })
  }),

  it('returns a variant object with multiple options as an object', () => {
    expect(generateVariantObject([{
      name: 'test',
      options: ['option1', { option2: 'py-2' }, { option3: 'py-5' }],
      defaultValue: 'option1'
    }])).toStrictEqual({
      test: {
        option1: '',
        option2: 'py-2',
        option3: 'py-5',
      }
    })
  })
})