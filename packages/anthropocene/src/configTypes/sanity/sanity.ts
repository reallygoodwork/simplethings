import { z } from 'zod'

const zSanityType = z.union([z.string(), z.boolean(), z.number(), z.record(z.string())])

export const zSanitySchemaType = z.object({
  title: z.string(),
  name: z.string(),
  type: zSanityType,
  description: z.string().nullable(),
  options: z.record(z.string(), z.any()).nullable(),
  validation: z.record(z.string(), z.any()).nullable(),
  of: z.array(z.object({
    type: z.string(),
  })).nullable(),
  fields: z.array(z.any()).nullable(),
})