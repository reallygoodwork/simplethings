import { defineField } from 'sanity';

export const FeatureRow = defineField({
  name: 'featureRow',
  title: 'FeatureRow',
  type: 'object',
  fields: [
    defineField({
      name: 'cTAText',
      title: 'cTAText',
      type: 'string',
      initialValue: "Stay in policy and on budget with proactive policy controls, configurable approvals, and AI-powered reconciliation.",
    }),
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
      initialValue: "Set guardrails to prevent overspending",
    }),
    defineField({
      name: 'showButton',
      title: 'showButton',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'variant',
      title: 'variant',
      type: 'string',
      initialValue: "alternate",
      options: { list: ['alternate', 'centeredAlt'] }
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
  ],
  preview: {
    prepare() {
      return {
        title: 'FeatureRow',
      }
    },
  }
})
