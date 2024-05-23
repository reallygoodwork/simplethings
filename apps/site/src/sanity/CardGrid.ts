import { defineField } from 'sanity';

export const CardGrid = defineField({
  name: 'cardGrid',
  title: 'CardGrid',
  type: 'object',
  fields: [
    defineField({
      name: 'showText',
      title: 'showText',
      type: 'boolean',
    }),
    defineField({
      name: 'imagePadding',
      title: 'imagePadding',
      type: 'string',
      initialValue: 'default',
      options: { list: ['default', 'noBottom', 'noPadding'] }
    }),
  ]
})
