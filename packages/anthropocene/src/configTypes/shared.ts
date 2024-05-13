import { z } from 'zod'

export const zStyleProperty = z.record(z.string(), z.record(z.string(), z.union([z.string(), z.number()]))).nullable()