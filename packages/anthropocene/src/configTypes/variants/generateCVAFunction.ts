import {z} from 'zod'
import { createComponentName } from "@utils/createComponentName";
import { CompoundVariant } from "./compoundVariants";
import { Variant } from "./variants";
import { lowerCase, camelCase } from 'lodash';

const zOptionObject = z.record(z.string(), z.union([z.string(), z.boolean(), z.record(z.string())]))
const zobject = z.record(z.string(), zOptionObject);
type VariantObject = z.infer<typeof zobject>;
type OptionObject = z.infer<typeof zOptionObject>;


export const generateVariantObject = (variants: Variant[]) => {
  let variantObject: VariantObject = {};
  variants.forEach((variant) => {
    let options: OptionObject = {};

    variant.options.forEach((option) => {
      if (typeof option === 'string' || typeof option === 'boolean') {
        options[`${option}`] = '';
      } else {
        const [key, value] = Object.entries(option);

        if (key) {
          options[key[0]] = key[1];
        }
      }
    });

    variantObject[variant.name] = {
      ...options
    };
  })
  return variantObject;
}

export const generateDefaultVariantObject = (variants: Variant[]) => {
  let defaultVariantObject: any = {}

  variants.forEach((variant) => {
    defaultVariantObject[`${variant.name}`] = variant.defaultValue;
  })

  return defaultVariantObject;
}

export const generateCompoundVariantObject = (name: string, compoundVariants: CompoundVariant[]): any[] => {

  return compoundVariants.map(variant => {
    const { styles, ...rest } = variant;
    const className = `${camelCase(lowerCase(`${name}`))}-${rest.className}`;
    const compoundVariantObject = {
      ...rest,
      className
    }

    return [className, styles, compoundVariantObject]
  })
}

export const generateCVAFunction = (name: string, variants: Variant[], compoundVariants: CompoundVariant[]) => {
  const variantObject = generateVariantObject(variants);
  const defaultVariantObject = generateDefaultVariantObject(variants);
  const compoundVariantObject = generateCompoundVariantObject(name, compoundVariants);

  const variantNameList = variants.map((variant) => {
    return variant.name;
  })

  const compoundVariantsObj = compoundVariantObject.flatMap((variant) => {
    return variant[2]
  })


  const cvaConfigObject = {
    variants: variantObject,
    defaultVariants: defaultVariantObject,
    compoundVariants: compoundVariantsObj,
  }

  return {
    variantProps: variantNameList,
    ...cvaConfigObject
  }
}