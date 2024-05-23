import {defineField} from 'sanity';
import { Button } from './Button'
import { Badge } from './Badge'
import { SectionHeader } from './SectionHeader'
import { CardWithDescription } from './CardWithDescription'
import { FeatureCard } from './FeatureCard'
import { Card } from './Card'
import { CardGrid } from './CardGrid'

// Don't edit this file. This is a generated file. Edit the component file instead.
export const Page = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      group: 'seo'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: Button.name}, {type: Badge.name}, {type: SectionHeader.name}, {type: CardWithDescription.name}, {type: FeatureCard.name}, {type: Card.name}, {type: CardGrid.name}],
      group: 'content'
    }),
    defineField({
      name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo'
    }),
    defineField({
      name: 'seoKeywords', title: 'SEO Keywords', type: 'string', group: 'seo'
    }),
    defineField({
      name: 'seoDescription', title: 'SEO Description', type: 'string', group: 'seo'
    }),
    defineField({
      name: 'seoImage', title: 'SEO Image', type: 'image', group: 'seo'
    })
  ]
})
  