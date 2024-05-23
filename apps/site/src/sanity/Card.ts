import { defineField } from 'sanity';

export const Card = defineField({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'showText',
      title: 'showText',
      type: 'boolean',
      initialValue: true,
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
