import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

const ButtonCVA = cva('button', {
  variants: {
    showTrailingIcon:{
      true: '',
      false: '',
    },
    showLeadingIcon:{
      true: '',
      false: '',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      xl: '',
      lg: '',
    },
    purpose: {
      primary: '',
      secondary: '',
      soft: '',
      link: '',
      solid: '',
    },
  },
  defaultVariants: {
    showTrailingIcon: false,
    showLeadingIcon: false,
    size: 'xs',
    purpose: 'primary',
  },
  compoundVariants: [
    {
      className: 'button-xs-primary',
      size: 'xs',
      purpose: 'primary',
    },
    {
      className: 'button-sm-primary',
      size: 'sm',
      purpose: 'primary',
    },
    {
      className: 'button-md-primary',
      size: 'md',
      purpose: 'primary',
    },
    {
      className: 'button-lg-primary',
      size: 'lg',
      purpose: 'primary',
    },
    {
      className: 'button-xl-primary',
      size: 'xl',
      purpose: 'primary',
    },
    {
      className: 'button-xs-secondary',
      size: 'xs',
      purpose: 'secondary',
    },
    {
      className: 'button-sm-secondary',
      size: 'sm',
      purpose: 'secondary',
    },
    {
      className: 'button-md-secondary',
      size: 'md',
      purpose: 'secondary',
    },
    {
      className: 'button-lg-secondary',
      size: 'lg',
      purpose: 'secondary',
    },
    {
      className: 'button-xl-secondary',
      size: 'xl',
      purpose: 'secondary',
    },
    {
      className: 'button-xs-soft',
      size: 'xs',
      purpose: 'soft',
    },
    {
      className: 'button-sm-soft',
      size: 'sm',
      purpose: 'soft',
    },
    {
      className: 'button-md-soft',
      size: 'md',
      purpose: 'soft',
    },
    {
      className: 'button-lg-soft',
      size: 'lg',
      purpose: 'soft',
    },
    {
      className: 'button-xl-soft',
      size: 'xl',
      purpose: 'soft',
    },
    {
      className: 'button-xs-link',
      size: 'xs',
      purpose: 'link',
    },
    {
      className: 'button-sm-link',
      size: 'sm',
      purpose: 'link',
    },
    {
      className: 'button-md-link',
      size: 'md',
      purpose: 'link',
    },
    {
      className: 'button-lg-link',
      size: 'lg',
      purpose: 'link',
    },
    {
      className: 'button-xl-link',
      size: 'xl',
      purpose: 'link',
    },
    {
      className: 'button-xs-solid',
      size: 'xs',
      purpose: 'solid',
    },
    {
      className: 'button-sm-solid',
      size: 'sm',
      purpose: 'solid',
    },
    {
      className: 'button-md-solid',
      size: 'md',
      purpose: 'solid',
    },
    {
      className: 'button-lg-solid',
      size: 'lg',
      purpose: 'solid',
    },
    {
      className: 'button-xl-solid',
      size: 'xl',
      purpose: 'solid',
    },
  ]
})

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonCVA> {
  className?: string;
  buttonText: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  showTrailingIcon,
  showLeadingIcon,
  size,
  purpose,
  buttonText,
}) => {
  return (
    <button className={ButtonCVA({
      showTrailingIcon,
      showLeadingIcon,
      size,
      purpose,
      className
    })
}>
      <p className="">
        {buttonText}
      </p>
    </button>
  );
};