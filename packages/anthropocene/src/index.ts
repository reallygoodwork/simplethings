import { extractClassnames } from '@utils/componentClassnames/componentClassnames'
import { convertComponentStyleToCva, zComponentStyle } from '@utils/componentStyle/componentStyle'
import { zElementType } from '@utils/HTMLElement'
import { z } from 'zod'

const zProps = z.record(
  z.string(),
  z.union([z.string(), z.number(), z.array(z.any(), z.record(z.string(), z.any())), z.boolean(), z.date()]),
)

const zBaseConfigObject = z.object({
  name: z.string().regex(/^[A-Z][^\s]+$/),
  isComponent: z.boolean().optional(),
  acceptsChildren: z.boolean().optional(),
  properties: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
  tagName: zElementType,
  style: zComponentStyle.optional(),
  props: zProps.optional(),
})

type ConfigObject = z.infer<typeof zBaseConfigObject> & {
  children?: ConfigObject[]
}

const zConfigObject: z.ZodType<ConfigObject> = zBaseConfigObject.extend({
  children: z.lazy(() => zConfigObject.array()),
})

const badge: ConfigObject = {
  name: 'Badge',
  tagName: 'div',
  style: {
    isCustom: true,
    utilClasses: ['my-4'],
    baseStyles: {
      fontSize: 'dfsdf',
      'py--hover': 'glkndfg',
      'pt--sm': 'fz__sm',
    },
    variants: {
      variantTypes: {
        rounded: [true, false],
        test: ['primary', 'secondary'],
      },
      defaultVariants: {
        rounded: true,
        test: 'primary',
      },
      compoundVariants: [
        {
          intent: 'primary',
          size: 'medium',
          variantClassName: 'uppercase',
          utilClasses: 'uppercase py-2',
          styles: {
            fontSize: 'fz__sm',
          },
        },
      ],
    },
  },
  children: [],
}

const cvaStyles = convertComponentStyleToCva('Badge', badge.style!)
const classNames = extractClassnames('Badge', badge.style!)

const badgeResult = zConfigObject.safeParse(badge)
console.log(cvaStyles.variants.compoundVariants)
