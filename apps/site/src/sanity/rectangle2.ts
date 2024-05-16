import {defineField} from 'sanity';

// Don't edit this file. This is a generated file. Edit the component file instead.
export const Rectangle2 = defineField({
  name: 'rectangle2',
  title: 'Rectangle2',
  type: 'object',
  fields: [
    defineField({
    name: 'showText',
    title: 'showText',
    type: 'boolean',
    initialValue: 'true',
    
  }),
defineField({
    name: 'hello',
    title: 'hello',
    type: 'string',
    initialValue: 'test',
    
  }),
defineField({
    name: 'property1',
    title: 'property1',
    type: 'string',
    initialValue: 'Default',
    options: { list: ['Default','Variant2'] }
  })
  ]
})

  