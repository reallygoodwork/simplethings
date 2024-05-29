import { z } from 'zod'

export const zDependency = z.object({
  name: z.string(),
  packageName: z.string(),
  isDefault: z.boolean().optional(),
})

export type Dependency = z.infer<typeof zDependency>