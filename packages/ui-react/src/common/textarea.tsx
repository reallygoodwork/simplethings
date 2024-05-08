import { cva, type VariantProps } from "class-variance-authority";
import { RefObject, forwardRef } from "react";

export const textarea = cva(
  "rounded-base focus-visible:outline-transparent focus-visible:ring focus-visible:ring-primary border disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: ["bg-bg  border-grey-200", "text-body"],
        hollow: ["bg-transparent  border-transparent", "text-body"],
        surface: ["bg-surface/30 border-grey-200", "text-body"],
      },
      scale: {
        xs: 'py-fry-xs ps-frx-xs pe-frx text-fr-sm',
        sm: 'py-fry-xs ps-frx-xs pe-frx text-fr',
        md: 'py-fry-s ps-frx-xs pe-frx text-fr',
        lg: 'py-fry ps-frx-s pe-frx text-fr',
        xl: 'py-fry-l ps-frx pe-frx-l text-fr-lg',
      },
    },
    defaultVariants: {
      variant: "primary",
      scale: "md",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textarea> {
      ref?: RefObject<HTMLTextAreaElement> | null | undefined;
    }

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, scale, ...props }, ref) => (
    <textarea
      ref={ref}
      className={textarea({ variant, className, scale })}
      {...props}
    >
    </textarea>
  )
);

Textarea.displayName = "Textarea";
