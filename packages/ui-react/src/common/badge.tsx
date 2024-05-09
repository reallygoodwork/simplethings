import React from "react";
import { VariantProps, cva } from "class-variance-authority";

export const BadgeCVA = cva('badge text-fr-sm py-fry-xs px-frx-s border', {
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
      true: 'rounded-full',
      false: 'rounded-base'
    },
    vibe: {
      outlined: '',
      soft: '',
      none: ''
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      vibe: 'none',
      class: 'bg-primary text-surface border-primary'
    },
    {
      variant: 'primary',
      vibe: 'outlined',
      class: 'bg-transparent text-primary border-primary'
    },
    {
      variant: 'primary',
      vibe: 'soft',
      class: 'bg-primary/10 text-primary border-transparent'
    },
    {
      variant: 'alt',
      vibe: 'none',
      class: 'bg-alt text-alt-contrasted border-alt'
    },
    {
      variant: 'alt',
      vibe: 'outlined',
      class: 'bg-transparent text-alt-contrasted border-alt'
    },
    {
      variant: 'alt',
      vibe: 'soft',
      class: 'bg-alt/60 text-alt-contrasted border-transparent'
    },
    {
      variant: 'accent',
      vibe: 'none',
      class: 'bg-accent text-body border-accent'
    },
    {
      variant: 'accent',
      vibe: 'outlined',
      class: 'bg-transparent text-accent-contrasted border-alt'
    },
    {
      variant: 'accent',
      vibe: 'soft',
      class: 'bg-accent/50 text-accent-contrasted border-transparent'
    },
    {
      variant: 'success',
      vibe: 'none',
      class: 'bg-success text-surface border-success'
    },
    {
      variant: 'success',
      vibe: 'outlined',
      class: 'bg-transparent text-success border-success'
    },
    {
      variant: 'success',
      vibe: 'soft',
      class: 'bg-success/20 text-success border-transparent'
    },
    {
      variant: 'warning',
      vibe: 'none',
      class: 'bg-warning text-surface border-warning'
    },
    {
      variant: 'warning',
      vibe: 'outlined',
      class: 'bg-none text-warning border-warning'
    },
    {
      variant: 'warning',
      vibe: 'soft',
      class: 'bg-warning/10 text-warning border-transparent'
    },
  ],
  defaultVariants: {
    variant: 'primary',
    rounded: false,
    vibe: 'none'
  }
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof BadgeCVA> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  vibe = 'none',
  rounded,
  ...props
}) => <div className={BadgeCVA({ variant, rounded, vibe, className })} {...props} />

Badge.displayName = "Badge";