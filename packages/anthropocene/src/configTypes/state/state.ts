import { z } from 'zod'

const zStateValue = z.union([z.string(), z.number(), z.boolean(), z.array(z.any(), z.record(z.string(), z.any())), z.date(), z.null()])

export const zState = z.object({
  name: z.string(),
  setterName: z.string(),
  initialValue: zStateValue,
  type: z.string().describe('TypeScript Value'),
})