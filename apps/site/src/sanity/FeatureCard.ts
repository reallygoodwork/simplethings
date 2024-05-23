import { defineField } from 'sanity';

export const FeatureCard = defineField({
  name: 'featureCard',
  title: 'FeatureCard',
  type: 'object',
  fields: [
    defineField({
      name: 'property1',
      title: 'property1',
      type: 'string',
      initialValue: 'default',
      options: { list: ['default', 'withoutLogo', 'variant3', 'variant4'] }
    }),
  ]
})
