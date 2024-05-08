import { cva, type VariantProps } from "class-variance-authority";
import { RefObject, forwardRef } from "react";

export const checkbox = cva(
  "rounded-base focus-visible:outline-transparent focus-visible:ring focus-visible:ring-accent border disabled:opacity-50 disabled:pointer-events-none border-grey-200 checked:bg-primary" ,
  {
    variants: {
      scale: {
        sm: 'size-frx-s',
        md: 'size-fry-xl',
        lg: 'size-fry-2xl',
      },
    },
    defaultVariants: {
      scale: "md",
    },
  }
);

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof checkbox> {
    ref?: RefObject<HTMLInputElement> | null | undefined;
    label: string;
    id?: string;
  }

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, scale, label, id, ...props }, ref) => (
    <div className="flex items-center">
      <input
        id={id}
        ref={ref}
        className={checkbox({ className, scale })}
        {...props}
        type="checkbox"
        />
      <label htmlFor={id} className='ms-m text-m text-primary leading-none font-[450]'>{label}</label>
    </div>
  )
);

Checkbox.displayName = "Checkbox";
