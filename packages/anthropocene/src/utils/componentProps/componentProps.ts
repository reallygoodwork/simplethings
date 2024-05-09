import { z } from 'zod'

export const zComponentProps = z.record(
  z.string(),
  z.union([
    z.string(),
    z.number(),
    z.array(z.any(), z.record(z.string(), z.any())),
    z.boolean(),
    z.date(),
    z.function()
  ])
);