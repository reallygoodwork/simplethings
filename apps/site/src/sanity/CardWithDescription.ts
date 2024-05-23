import { defineField } from 'sanity';

export const CardWithDescription = defineField({
  name: 'cardWithDescription',
  title: 'CardWithDescription',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
      initialValue: 'The card is just the start',
    }),
    defineField({
      name: 'body',
      title: 'body',
      type: 'string',
      initialValue: 'Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation.',
    }),
  ]
})
