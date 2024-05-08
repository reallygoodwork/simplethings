import { cva, type VariantProps } from "class-variance-authority";
import { RefObject, forwardRef } from "react";

export const select = cva(
  "select rounded-base focus-visible:outline-transparent focus-visible:ring focus-visible:ring-primary border disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: ["bg-bg  border-grey-200", "text-body"],
        hollow: ["bg-transparent  border-transparent", "text-body"],
        surface: ["bg-surface/30 border-grey-200", "text-body"],
      },
      scale: {
        xs: 'py-fry-xs ps-frx-xs pe-frx-4xl text-fr-sm',
        sm: 'py-fry-xs ps-frx-xs pe-frx-4xl text-fr',
        md: 'py-fry-s ps-frx-xs pe-frx-4xl text-fr',
        lg: 'py-fry ps-frx-s pe-frx-4xl text-fr',
        xl: 'py-fry-l ps-frx pe-frx-4xl text-fr-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: "primary",
      scale: "md",
      fullWidth: false,
    },
  }
);

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
  VariantProps<typeof select> {
  ref?: RefObject<HTMLSelectElement> | null | undefined;
  options?: string[] | { value: string | number; label: string }[];
    }

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, fullWidth, scale, options, ...props }, ref) => (
    <select
      ref={ref}
      className={select({ variant, scale, fullWidth, className })}
      {...props}
    >
      {options?.map((option, index) => {
        if (typeof option === "string") {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        } else {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        }
      })}
    </select>
  )
);

Select.displayName = "Select";
