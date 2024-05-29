import { z } from 'zod'
import { ComponentStyle } from './componentStyle'

export const zVariantStylesObject = z.record(z.string(), z.array(z.union([z.string(), z.boolean()])))
export const zVariantOutputObject = z.record(z.string(), z.record(z.string(), z.string()))

export type VariantStylesObject = z.infer<typeof zVariantStylesObject>
export type VariantOutputObject = z.infer<typeof zVariantOutputObject>

export const createVariantObject = (style: ComponentStyle): VariantOutputObject => {
  const obj: VariantOutputObject = {}
  const variants = style.variants.variantTypes

  for (const key in variants) {
    if (variants[key] === undefined) {
      console.warn(`Skipping key ${key} because it is undefined.`);
      continue; // Skip undefined properties
    }

    if (!obj[key] && Array.isArray(variants[key])) { // Check if output[key] is initialized
      obj[key] = {};
    }

    if (typeof variants[key] !== 'string') {
      const value = variants[key] as string[] | boolean[];
      value!.forEach((value: string | boolean) => {
        if (typeof value === 'string') {
          obj[key]![value] = '';
        } else if (typeof value === 'boolean') {
          obj[key]![`${value}`] = '';
        }
      });
    }
  }

  return obj
}