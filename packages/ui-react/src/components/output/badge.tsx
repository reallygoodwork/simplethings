import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const BadgeCVA = cva('badge', {
  variants: {
    variant: {
      grey: "bg-grey-200 text-body border-grey-200",
      primary: "",
      alt: "",
      accent: "",
      success: "",
      warning: "",
      error: "bg-error text-surface border-error",
      default: "bg-default text-surface border-default"
    },
    rounded: {
      true: "badge-rounded",
      false: ""
    },
    vibe: {
      outlined: "",
      soft: "",
      none: ""
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      vibe: "none",
      className: "badge-primary"
    },
    {
      variant: "primary",
      vibe: "outlined",
      className: "badge-primary-outlined"
    },
    {
      variant: "primary",
      vibe: "soft",
      class: "bg-primary/10 text-primary border-transparent",
      className: "badge-primary-soft"
    },
    {
      variant: "alt",
      vibe: "none",
      class: "bg-alt text-alt-contrasted border-alt",
      className: "badge-alt"
    },
    {
      variant: "alt",
      vibe: "outlined",
      class: "bg-transparent text-alt-contrasted border-alt",
      className: "badge-alt-outlined"
    },
    {
      variant: "alt",
      vibe: "soft",
      class: "bg-alt/60 text-alt-contrasted border-transparent",
      className: "badge-alt-soft"
    },
    {
      variant: "accent",
      vibe: "none",
      class: "bg-accent text-body border-accent",
      className: "badge-accent"
    },
    {
      variant: "accent",
      vibe: "outlined",
      class: "bg-transparent text-accent-contrasted border-alt",
      className: "badge-accent-outlined"
    },
    {
      variant: "accent",
      vibe: "soft",
      class: "bg-accent/50 text-accent-contrasted border-transparent",
      className: "badge-accent-soft"
    },
    {
      variant: "success",
      vibe: "none",
      class: "bg-success text-surface border-success",
      className: "badge-success"
    },
    {
      variant: "success",
      vibe: "outlined",
      class: "bg-transparent text-success border-success",
      className: "badge-success-outlined"
    },
    {
      variant: "success",
      vibe: "soft",
      class: "bg-success/20 text-success border-transparent",
      className: "badge-success-soft"
    },
    {
      variant: "warning",
      vibe: "none",
      class: "bg-warning text-surface border-warning",
      className: "badge-warning"
    },
    {
      variant: "warning",
      vibe: "outlined",
      class: "bg-none text-warning border-warning",
      className: "badge-warning-outlined"
    },
    {
      variant: "warning",
      vibe: "soft",
      class: "bg-warning/10 text-warning border-transparent",
      className: "badge-warning-soft"
    }
  ],
  defaultVariants: {
    variant: "primary",
    rounded: false,
    vibe: "none"
  }
})
  

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof BadgeCVA> {
  label: string
}

export const Badge: React.FC<BadgeProps> = ({
  label,
variant = 'primary',
rounded = false,
vibe = 'none',
className,
...rest
}) => {
  return <div className={BadgeCVA({ className, variant, rounded, vibe })}>
    {label}
  </div>
}

Badge.displayName = 'Badge'

  