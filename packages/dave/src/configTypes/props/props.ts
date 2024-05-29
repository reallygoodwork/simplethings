import { z } from 'zod'

export const zPropsValue = z.union([z.string(), z.number(), z.boolean(), z.array(z.any(), z.record(z.string(), z.any())), z.date(), z.null(), z.function()])

export const zProps = z.object({
  name: z.string(),
  type: z.string().describe('TypeScript Value'),
  defaultValue: zPropsValue,
})