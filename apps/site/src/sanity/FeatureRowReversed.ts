import { defineField } from 'sanity';

export const FeatureRowReversed = defineField({
  name: 'featureRowReversed',
  title: 'FeatureRowReversed',
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
      initialValue: "default",
      options: { list: ['default', 'centered'] }
    }),
  ]
})
