import { defineField } from 'sanity';

export const Card = defineField({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'body',
      type: 'string',
      initialValue: "'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day",
    }),
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
      initialValue: "You Believe in Authority",
    }),
    defineField({
      name: 'showText',
      title: 'showText',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'variant',
      title: 'variant',
      type: 'string',
      initialValue: "default",
      options: { list: ['default', 'noBottom', 'noPadding'] }
    }),
  ]
})
