import { zElementAttributes } from '@configTypes/attributes'
import { zStyleProperty } from '@configTypes/shared'
import { z } from 'zod'

export const zElementConfig = z.object({
  isText: z.boolean().optional(),
  textValue: z.string().optional(),
  associatedProp: z.string().optional(),
  tagName: z.string().optional(),
  attributes: zElementAttributes,
  className: z.string().optional(),
  style: zStyleProperty.array().optional(),
})