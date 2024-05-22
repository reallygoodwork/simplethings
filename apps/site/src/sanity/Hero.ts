import { defineField } from 'sanity';

export const Hero = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    }),
  ]
})
