import { z } from 'zod'
import { zStyleProperty } from '@configTypes/shared'

export const zCompoundVariant = z.record(z.string(), z.any())

export const zCompoundVariants = z.record(z.union([z.string(), z.literal('className'), z.literal('styles')]), z.union([z.string(), z.record(z.string())]))

export type CompoundVariant = z.infer<typeof zCompoundVariant>
export type CompoundVariants = z.infer<typeof zCompoundVariants>