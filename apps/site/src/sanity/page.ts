import {defineField} from 'sanity';
import { Rectangle2 } from './rectangle2'

// Don't edit this file. This is a generated file. Edit the component file instead.
export const Page = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: Rectangle2.name}]
    })
  ]
})
  