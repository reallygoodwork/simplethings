import {defineField} from 'sanity';

// Don't edit this file. This is a generated file. Edit the component file instead.
export const Badge = defineField({
  name: 'badge',
  title: 'Badge',
  type: 'object',
  fields: [
    defineField({
    name: 'label',
    title: 'label',
    type: 'string',
    
    
  }),
defineField({
    name: 'variant',
    title: 'variant',
    type: 'string',
    initialValue: 'primary',
    options: { list: ['primary','alt','accent','success','warning','error'] }
  }),
defineField({
    name: 'rounded',
    title: 'rounded',
    type: 'boolean',
    
    
  }),
defineField({
    name: 'vibe',
    title: 'vibe',
    type: 'string',
    initialValue: 'none',
    options: { list: ['outlined','soft','none'] }
  })
  ]
})

  