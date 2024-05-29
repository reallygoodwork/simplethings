import { z } from 'zod'

export const zElementAttributes = z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.array(z.any(), z.record(z.string(), z.any())), z.date(), z.null(), z.function()])).optional()