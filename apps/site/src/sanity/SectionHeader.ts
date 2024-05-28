import { defineField } from 'sanity';

export const SectionHeader = defineField({
  name: 'sectionHeader',
  title: 'SectionHeader',
  type: 'object',
  fields: [
    defineField({
      name: 'showButton',
      title: 'showButton',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
      initialValue: "Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation.",
    }),
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
      initialValue: "The card is just the start",
    }),
    defineField({
      name: 'showTrailingIcon',
      title: 'showTrailingIcon',
      type: 'boolean',
    }),
    defineField({
      name: 'showLeadingIcon',
      title: 'showLeadingIcon',
      type: 'boolean',
    }),
    defineField({
      name: 'buttonText',
      title: 'buttonText',
      type: 'string',
      initialValue: "Learn More",
    }),
    defineField({
      name: 'size',
      title: 'size',
      type: 'string',
      initialValue: "sm",
      options: { list: ['xs', 'sm', 'md', 'xl', 'lg'] }
    }),
    defineField({
      name: 'purpose',
      title: 'purpose',
      type: 'string',
      initialValue: "link",
      options: { list: ['primary', 'secondary', 'soft', 'link', 'solid'] }
    }),
  ]
})
