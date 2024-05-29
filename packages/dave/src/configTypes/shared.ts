import { z } from 'zod'

export const zStyleProperty = z.any()

export type StyleProperty = z.infer<typeof zStyleProperty>