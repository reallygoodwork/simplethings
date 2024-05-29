import { defineField } from 'sanity';

export const CardGrid = defineField({
  name: 'cardGrid',
  title: 'CardGrid',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'cards',
      type: 'array',
      of: [{ type: 'card' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'CardGrid',
      }
    },
  }
})
