import { cva, type VariantProps } from "class-variance-authority";
import { RefObject, forwardRef } from "react";

export const switchStyles = cva(
  ["rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus-visible:outline-transparent focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 border disabled:opacity-50 disabled:pointer-events-none relative border-grey-100 bg-surface checked:bg-none checked:text-muted checked:border-muted",
    "before:inline-block before:bg-bg checked:before:bg-accent before:translate-x-0 checked:before:translate-x-full before:rounded-full before:transform before:transition before:ease-in-out before:duration-200 before:shadow before:h-full before:w-1/2 p-px focus:checked:border-primary focus:ring-primary focus:ring-offset-2 focus:ring-2 before:ring-0"
  ],
  {
    variants: {
      scale: {
        sm: 'h-fry-xl w-frx-xl before:-translate-y-fry-xs',
        md: 'h-fry-2xl w-frx-2xl ',
        lg: 'h-fry-3xl w-frx-3xl ',
      },
    },
    defaultVariants: {
      scale: "md",
    },
  }
);

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof switchStyles> {
    ref?: RefObject<HTMLInputElement> | null | undefined;
  label: string;
  id?: string;
  }

export const Switch = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, scale, label, id, ...props }, ref) => (
    <div className="flex items-center">
      <input
        id={id}
        ref={ref}
        className={switchStyles({ className, scale })}
        {...props}
        type="checkbox"
        />
      <label htmlFor={id} className='ms-m text-m text-primary leading-none'>{label}</label>
    </div>
  )
);

Switch.displayName = "Switch";
