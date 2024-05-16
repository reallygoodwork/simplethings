import { zElementAttributes } from '@configTypes/attributes'
import { zDependency } from '@configTypes/dependencies/dependencies'
import { zStyleProperty } from '@configTypes/shared'
import { zState } from '@configTypes/state/state'
import { z } from 'zod'

export const zBoundProps = z.object({
  figmaPropType: z.union([z.string(), z.undefined()]),
  figmaRef: z.union([z.string(), z.null(), z.undefined()]),
  name: z.union([z.string(), z.null(), z.undefined()]),
  type: z.string(),
})

export type BoundProps = z.infer<typeof zBoundProps>

export const zVariant = z.object({
  figmaRef: z.string().optional(),
  name: z.string().optional(),
  value: z.string().optional(),
  styles: zStyleProperty.optional(),
})

export const zElementConfig = z.object({
  name: z.string(),
  isText: z.boolean().optional(),
  textValue: z.string().optional(),
  elementType: z.string(),
  description: z.string().optional(),
  dependencies: zDependency.array(),
  state: zState.array().optional(),
  isComponent: z.boolean().optional(),
  componentName: z.string().optional(),
  componentProps: z.record(z.string(), z.any()).array(),
  boundProps: zBoundProps.array().optional(),
  elementAttributes: zElementAttributes,
  className: z.string().optional(),
  styles: zStyleProperty.optional(),
  variants: zVariant.array().optional(),
})

export type ElementConfig = z.infer<typeof zElementConfig> & {
  children?: ElementConfig[]
}

const zElementSchema: z.ZodType<ElementConfig> = zElementConfig.extend({
  children: z.lazy(() => zElementSchema.array()),
})

export type ElementSchema = z.infer<typeof zElementSchema>