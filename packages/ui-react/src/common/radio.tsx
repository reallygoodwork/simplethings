import { cva, type VariantProps } from "class-variance-authority";
import { RefObject, forwardRef } from "react";

export const radio = cva(
  "rounded-full focus-visible:outline-transparent focus-visible:ring focus-visible:ring-primary border disabled:opacity-50 disabled:pointer-events-none border-grey-200 checked:bg-primary",
  {
    variants: {
      variant: {
        primary: ["bg-bg  border-grey-200", "text-body"],
        hollow: ["bg-transparent  border-transparent", "text-body"],
        surface: ["bg-surface/30 border-grey-200", "text-body"],
      },
      scale: {
        sm: 'size-frx-s',
        md: 'size-fry-xl',
        lg: 'size-fry-2xl',
      },
    },
    defaultVariants: {
      variant: "primary",
      scale: "md",
    },
  }
);

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof radio> {
    ref?: RefObject<HTMLInputElement> | null | undefined;
    label: string;
    htmlFor?: string;
  }

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, htmlFor, scale, label, ...props }, ref) => (
    <div className="flex items-center">
      <input
        id={htmlFor}
        name={htmlFor}
        ref={ref}
        className={radio({ className, scale })}
        {...props}
        type="radio"
        />
      <label htmlFor={htmlFor} className='ms-m text-m text-primary leading-none'>{label}</label>
    </div>
  )
);

Radio.displayName = "Radio";
