import { createVariantObject } from "./createVariantObject"
import { mockComponentStyle } from "./componentStyle.test"

describe("componentStyle - createVariantObject", () => {
  it('should convert component style to createVariantObject', () => {
    expect(createVariantObject(mockComponentStyle)).toEqual({
      rounded: {
        true: '',
        false: '',
      },
      test: {
        primary: '',
        secondary: '',
      }
    })
  })
})