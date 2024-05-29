import { defineField } from 'sanity';

export const FeatureCard = defineField({
  name: 'featureCard',
  title: 'FeatureCard',
  type: 'object',
  fields: [
    defineField({
      name: 'showLogo',
      title: 'showLogo',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'attribution',
      title: 'attribution',
      type: 'string',
      initialValue: "lorem ipsum dolor sit",
    }),
    defineField({
      name: 'quote',
      title: 'quote',
      type: 'string',
      initialValue: "Velit commodo ipsum nulla labore incididunt ullamco ad voluptate cupidatat commodo. Veniam ex ad magna id. Adipisicing quis ut incididunt elit. Occaecat exercitation id aliqua exercitation eu laborum tempor nisi est aliqua enim ex voluptate.",
    }),
    defineField({
      name: 'variant',
      title: 'variant',
      type: 'string',
      initialValue: "default",
      options: { list: ['default', 'light'] }
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'FeatureCard',
      }
    },
  }
})
