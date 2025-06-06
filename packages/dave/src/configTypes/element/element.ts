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
  value: z.any().optional()
})

export type BoundProps = z.infer<typeof zBoundProps>

export const zVariant = z.object({
  figmaRef: z.string().optional(),
  name: z.string().optional(),
  value: z.string().optional(),
  styles: zStyleProperty.optional(),
  props: z.record(z.string(), z.any()).array().optional(),
  children: z.object({
    name: z.string().optional(),
    isText: z.boolean().optional(),
    styles: zStyleProperty.optional(),
  }).array().optional()
})

export type Variant = z.infer<typeof zVariant>

export const zElementConfig = z.object({
  config: z.object({
    sanity: z.boolean().optional(),
    atomicComponent: z.boolean().optional(),
  }).optional(),
  updated: z.string().datetime().optional(),
  name: z.string(),
  isText: z.boolean().optional(),
  textValue: z.string().optional(),
  elementType: z.string(),
  typeScriptType: z.string().optional(),
  description: z.string().optional(),
  dependencies: zDependency.array().optional(),
  state: zState.array().optional(),
  isComponent: z.boolean().optional(),
  componentName: z.string().optional(),
  componentProps: z.record(z.string(), z.any()).array(),
  variantOptions: z.record(z.string(), z.any()).optional(),
  defaultVariants: z.record(z.string(), z.any()).optional(),
  compoundVariants: z.record(z.string(), z.any()).array().optional(),
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