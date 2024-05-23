import { defineField } from 'sanity';

export const Badge = defineField({
  name: 'badge',
  title: 'Badge',
  type: 'object',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'badgeText',
      type: 'string',
      initialValue: 'Badge',
    }),
    defineField({
      name: 'showClose',
      title: 'showClose',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showDot',
      title: 'showDot',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'theme',
      title: 'theme',
      type: 'string',
      initialValue: 'primary',
      options: { list: ['default', 'error', 'success', 'warning', 'primary'] }
    }),
  ]
})
