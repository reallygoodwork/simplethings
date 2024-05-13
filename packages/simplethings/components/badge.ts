import { ComponentConfig } from '@simplethings/anthropocene'

export const badge: ComponentConfig = {
  name: 'Badge',
  tagName: 'div',
  className: 'badge',
  componentType: 'HTMLDivElement',
  description: 'A badge component',
  dependencies: [
    {
      name: 'React',
      packageName: 'react',
      isDefault: true,
    },
  ],
  typeScriptProps: [
    {
      name: 'label',
      type: 'string',
      required: true,
    },
  ],
  style: [
    {
      badge: {
        fontSize: '0.75rem',
      },
    },
    {
      'badge-primary': {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-surface)',
        borderColor: 'var(--color-primary)',
      },
    },
    {
      'badge-primary-outlined': {
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
      },
    },
    {
      'badge-rounded': {
        borderRadius: 'var(--radius-rounded)',
      },
    },
  ],
  children: [
    {
      isText: true,
      textValue: 'Hello World',
      associatedProp: 'label',
    },
  ],
  props: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
    },
    {
      name: 'variant',
      type: 'string',
      defaultValue: 'primary',
      options: ['grey', 'primary', 'alt', 'accent', 'success', 'warning', 'error', 'default'],
    },
    {
      name: 'rounded',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'vibe',
      type: 'string',
      defaultValue: 'none',
      options: ['outlined', 'soft', 'none'],
    },
  ],
  cvaSchema: {
    variants: {
      variant: {
        grey: 'bg-grey-200 text-body border-grey-200',
        primary: '',
        alt: '',
        accent: '',
        success: '',
        warning: '',
        error: 'bg-error text-surface border-error',
        default: 'bg-default text-surface border-default',
      },
      rounded: {
        true: 'badge-rounded',
        false: '',
      },
      vibe: {
        outlined: '',
        soft: '',
        none: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        vibe: 'none',
        className: 'badge-primary',
      },
      {
        variant: 'primary',
        vibe: 'outlined',
        className: 'badge-primary-outlined',
      },
      {
        variant: 'primary',
        vibe: 'soft',
        class: 'bg-primary/10 text-primary border-transparent',
        className: 'badge-primary-soft',
      },
      {
        variant: 'alt',
        vibe: 'none',
        class: 'bg-alt text-alt-contrasted border-alt',
        className: 'badge-alt',
      },
      {
        variant: 'alt',
        vibe: 'outlined',
        class: 'bg-transparent text-alt-contrasted border-alt',
        className: 'badge-alt-outlined',
      },
      {
        variant: 'alt',
        vibe: 'soft',
        class: 'bg-alt/60 text-alt-contrasted border-transparent',
        className: 'badge-alt-soft',
      },
      {
        variant: 'accent',
        vibe: 'none',
        class: 'bg-accent text-body border-accent',
        className: 'badge-accent',
      },
      {
        variant: 'accent',
        vibe: 'outlined',
        class: 'bg-transparent text-accent-contrasted border-alt',
        className: 'badge-accent-outlined',
      },
      {
        variant: 'accent',
        vibe: 'soft',
        class: 'bg-accent/50 text-accent-contrasted border-transparent',
        className: 'badge-accent-soft',
      },
      {
        variant: 'success',
        vibe: 'none',
        class: 'bg-success text-surface border-success',
        className: 'badge-success',
      },
      {
        variant: 'success',
        vibe: 'outlined',
        class: 'bg-transparent text-success border-success',
        className: 'badge-success-outlined',
      },
      {
        variant: 'success',
        vibe: 'soft',
        class: 'bg-success/20 text-success border-transparent',
        className: 'badge-success-soft',
      },
      {
        variant: 'warning',
        vibe: 'none',
        class: 'bg-warning text-surface border-warning',
        className: 'badge-warning',
      },
      {
        variant: 'warning',
        vibe: 'outlined',
        class: 'bg-none text-warning border-warning',
        className: 'badge-warning-outlined',
      },
      {
        variant: 'warning',
        vibe: 'soft',
        class: 'bg-warning/10 text-warning border-transparent',
        className: 'badge-warning-soft',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      rounded: false,
      vibe: 'none',
    },
  },
}
