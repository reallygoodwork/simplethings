import { cva, type VariantProps } from "class-variance-authority";

export const button = cva("rounded-button", {
  variants: {
    intent: {
      primary: ['bg-primary', 'hover:bg-primary/80', 'text-alt'],
      secondary: [],
      soft: [],
      link: [],
      solid: [],
    },
    size: {
      xs: ['px-6', 'py-2.5'],
      sm: ['px-5', 'py-2.5'],
      md: ['px-5', 'py-3'],
      lg: ['px-5', 'py-4'],
      xl: ['px-5', 'py-4'],
    }
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}


export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

Button.displayName = "Button";