import React from "react";
// import { ButtonCVA } from '@simplethings/tailwind-config/components'
import { VariantProps, cva } from "class-variance-authority";

export const ButtonCVA = cva(
  "rounded-base font-[450] focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none border border-px ",
  {
    variants: {
      variant: {
        primary: 'bg-accent text-primary hover:bg-accent/70 border-transparent',
        secondary: 'bg-bg text-primary hover:bg-primary/5 border-grey-200',
        soft: 'bg-soft text-primary hover:bg-soft/70 border-transparent',
        link: [],
        solid: 'bg-primary text-accent hover:bg-primary/70 border-transparent',
      },
      size: {
        xs: 'py-fry-xs px-frx text-fr-xs',
        sm: 'py-fry-xs px-frx-l text-fr-sm',
        md: 'py-fry-s px-frx-xl text-fr',
        lg: 'py-fry px-frx-2xl text-fr',
        xl: 'py-fry-l px-frx-2xl text-fr-lg',
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonCVA> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      onClick={props.onClick}
      className={ButtonCVA({ variant, size, className })}
      {...props}
    />
  )
};

Button.displayName = "Button";
