import { defineField } from 'sanity';

export const Button = defineField({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
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
      initialValue: "Button Text",
    }),
    defineField({
      name: 'size',
      title: 'size',
      type: 'string',
      initialValue: "xs",
      options: { list: ['xs', 'sm', 'md', 'xl', 'lg'] }
    }),
    defineField({
      name: 'purpose',
      title: 'purpose',
      type: 'string',
      initialValue: "primary",
      options: { list: ['primary', 'secondary', 'soft', 'link', 'solid'] }
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Button',
      }
    },
  }
})
