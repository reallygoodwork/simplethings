import { camelCase } from 'lodash'
import { util, z } from 'zod'

import { createVariantObject, zVariantOutputObject } from './createVariantObject'

export const zComponentDefaultVariants = z.record(z.string(), z.union([z.string(), z.boolean()]))

export const zComponentCompoundVariants = z.array(
  z.record(
    z.union([z.string(), z.literal('variantClassName'), z.literal('utilClasses'), z.literal('styles')]),
    z.union([z.string(), z.boolean(), z.record(z.string())]),
  ),
)

export const zCustomVariants = z.record(
  z.union([z.literal('utilClasses'), z.literal('variantClassName'), z.literal('styles'), z.string()]),
  z.union([z.string(), z.boolean(), z.record(z.string())]),
)

export type CustomVariants = z.infer<typeof zCustomVariants>

export const zCustomVariantsArray = z.array(zCustomVariants)

export type CustomVariantsArray = z.infer<typeof zCustomVariantsArray>

export const zComponentStyle = z.object({
  isCustom: z.boolean().optional(),
  baseStyles: z.record(z.string()),
  utilClasses: z.array(z.string()),
  variants: z.object({
    variantTypes: z.record(z.string(), z.array(z.union([z.string(), z.boolean()]))),
    defaultVariants: z.record(z.string(), z.union([z.string(), z.boolean()])),
    compoundVariants: zCustomVariantsArray,
  }),
})

export type ComponentStyle = z.infer<typeof zComponentStyle>

export const zVariables = z.union([z.literal('fz__sm'), z.literal('fz__l')])

// Used to represent a CSS variable or a variant object
export const zVariantObject = z.record(z.string(), zVariables)
export type StyleCva = z.infer<typeof zStyleCva>

export const extractStyleModifiers = (componentName: string, className: any) => {
  const name = camelCase(componentName)
  if (className.includes('--')) {
    const [base, modifier] = className.split('--')
    return `${name}-${base}__${modifier}`
  } else {
    return `${name}-${className}`
  }
}


// Used to represent a CSS variable or a variant object
export const zStyleCva = z.object({
  baseStyles: z.union([z.array(z.string()), z.string()]),
  variants: z.object({
    variantTypes: zVariantOutputObject,
    defaultVariants: zComponentDefaultVariants,
    compoundVariants: zComponentCompoundVariants,
  }),
})

const addNameToClassName = (name: string, compoundVariantsInput: CustomVariantsArray) => {
  return compoundVariantsInput.map((variant) => {
    const { utilClasses, styles, variantClassName, ...rest } = variant
    return {
      ...rest,
      className: [`${name}-${variant.variantClassName}`, variant.utilClasses].join(' '),
    }
  })
}

export const convertComponentStyleToCva = (componentName: string, style: ComponentStyle) => {
  const name = camelCase(componentName)
  const baseStyles: string[] = []

  for (const key in style.baseStyles) {
    if (typeof style.baseStyles[key] === 'string' && typeof key === 'string') {
      baseStyles.push(extractStyleModifiers(name, key))
    }
  }

  const obj: StyleCva = {
    baseStyles: [name, ...style.utilClasses],
    variants: {
      variantTypes: createVariantObject(style),
      defaultVariants: style.variants.defaultVariants,
      compoundVariants: addNameToClassName(name, style.variants.compoundVariants),
    },
  }

  return obj
}
