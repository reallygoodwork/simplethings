import React from "react";
// import { ButtonCVA } from '@simplethings/tailwind-config/components'
import { VariantProps, cva } from "class-variance-authority";

export const ButtonGroupCVA = cva(
  "first:rounded-s-base last:rounded-e-lg first:ms-0 -ms-px focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none border border-px focus:z-10 disabled:opacity-50 disabled:pointer-events-none font-[450]",
  {
    variants: {
      variant: {
        primary: "bg-accent text-primary hover:bg-accent/70 border border-accent-contrasted/10",
        secondary: "bg-bg text-primary hover:bg-primary/5 border-grey-200",
        soft: "bg-soft text-primary hover:bg-soft/70 border border-primary/20",
        link: [],
        solid: "bg-primary text-accent hover:bg-primary/70 border border-alt/20",
      },
      size: {
        xs: "py-fry-xs px-frx text-fr-xs",
        sm: "py-fry-xs px-frx-l text-fr-sm",
        md: "py-fry-s px-frx-xl text-fr ",
        lg: "py-fry px-frx-2xl text-fr",
        xl: "py-fry-l px-frx-2xl text-fr-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonGroupCVA> {
  buttons: { label: string; handleClick?: () => void }[];
}

export const ButtonGroup: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  buttons,
  ...props
}) => {
  return (
    <div className="inline-flex rounded-lg shadow-sm">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.handleClick}
          className={ButtonGroupCVA({ variant, size, className })}
          {...props}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.displayName = "ButtonGroup";
