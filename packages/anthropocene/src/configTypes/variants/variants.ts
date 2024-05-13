import { z } from 'zod'

export const zVariant = z.object({
  name: z.string(),
  options: z.union([z.string(), z.boolean(), z.record(z.string())]).array(),
  defaultValue: z.union([z.string(), z.boolean()]),
})

export type Variant = z.infer<typeof zVariant>