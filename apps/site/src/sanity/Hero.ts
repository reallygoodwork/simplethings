import { defineField } from 'sanity';

export const Hero = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
      initialValue: 'Eco-friendly designs, templates and code to help build your dream business while respecting the earth',
    }),
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
      initialValue: 'It’s giving green.',
    }),
  ]
})
