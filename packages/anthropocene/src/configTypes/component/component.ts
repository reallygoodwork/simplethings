import { z } from 'zod'
import { zDependency } from '@configTypes/dependencies'
import { zElementConfig } from '@configTypes/element'
import { zState } from '@configTypes/state'

export const zComponentConfig = zElementConfig.extend({
  name: z.string(),
  description: z.string().optional(),
  dependencies: zDependency.array(),
  state: zState.array().optional(),
  children: zElementConfig.array().nullable(),
  componentType: z.string().optional(),
  typeScriptProps: z.object({
    name: z.string(),
    type: z.string(),
    required: z.boolean().optional(),
  }).array().optional(),
  cvaSchema: z.object({
    variants: z.record(z.string(), z.record(z.string(), z.union([z.string(), z.string().array()]))),
    defaultVariants: z.record(z.string(), z.union([z.string(), z.boolean()])).optional(),
    compoundVariants: z.record(z.string()).array().optional(),
  }).optional(),
  props: z.object({
    name: z.string(),
    options: z.string().array().optional(),
    defaultValue: z.union([z.string(), z.number(), z.boolean(), z.any().array(), z.record(z.string(), z.any()).array(), z.record(z.string(), z.any())]).optional(),
    type: z.string().describe('TypeScript Value'),
  }).array().optional(),
})

export type ComponentConfig = z.infer<typeof zComponentConfig>
