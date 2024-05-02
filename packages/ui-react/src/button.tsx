import { cva, type VariantProps } from "class-variance-authority";

export const button = cva("rounded-btn leading-btn px-btn-x focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
  variants: {
    variant: {
      primary: ['bg-accent hover:bg-accent/60', 'text-primary'],
      secondary: ['bg-surface', 'text-body', 'hover:bg-primary/10'],
      soft: ['bg-soft', 'text-primary', 'hover:bg-soft/60'],
      link: [],
      solid: ['bg-primary', 'text-surface', 'hover:bg-primary/80'],
    },
    size: {
      xs: ['py-btn-xs-y', 'text-btn-xs'],
      sm: ['py-btn-sm-y', 'text-btn-sm'],
      md: ['py-btn-md-y', 'text-btn'],
      lg: ['py-btn-lg-y', 'text-btn'],
      xl: ['py-btn-lg-y', 'text-btn'],
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}


export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={button({ variant, size, className })} {...props} />;

Button.displayName = "Button";