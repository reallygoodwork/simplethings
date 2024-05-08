import { cva } from "class-variance-authority";

export const ButtonCVA = cva(
  "rounded-md",
  {
    variants: {
      variant: {
        primary: 'bg-accent text-primary hover:bg-accent-70',
        secondary: 'bg-bg text-primary hover:bg-bg-70 border border-2',
        soft: 'button-soft',
        link: [],
        solid: 'button-solid',
      },
      size: {
        xs: 'button-xs',
        sm: 'button-sm',
        md: 'button-md',
        lg: 'button-lg',
        xl: 'button-xl',
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonCVAProps = typeof ButtonCVA