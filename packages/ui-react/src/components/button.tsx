import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof ButtonCVA> {
  className?: string;
  showTrailingIcon: boolean;
  showLeadingIcon: boolean;
  buttonText: string;
  size: 'xs' | 'sm' | 'md' | 'xl' | 'lg';
  purpose: 'primary' | 'secondary' | 'soft' | 'link' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  showTrailingIcon = false,
  showLeadingIcon = false,
  buttonText = 'Button Text',
  size = 'xs',
  purpose = 'primary',
}) => {
  return (
    <div className={ButtonCVA({ showTrailingIcon, showLeadingIcon, size, purpose, className })}>
      <p className="buttontext">
        {buttonText}
      </p>
    </div>
  );
};

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
      className: 'xs-primary',
      size: 'xs',
      purpose: 'primary',
    },
    {
      className: 'sm-primary',
      size: 'sm',
      purpose: 'primary',
    },
    {
      className: 'md-primary',
      size: 'md',
      purpose: 'primary',
    },
    {
      className: 'lg-primary',
      size: 'lg',
      purpose: 'primary',
    },
    {
      className: 'xl-primary',
      size: 'xl',
      purpose: 'primary',
    },
    {
      className: 'xs-secondary',
      size: 'xs',
      purpose: 'secondary',
    },
    {
      className: 'sm-secondary',
      size: 'sm',
      purpose: 'secondary',
    },
    {
      className: 'md-secondary',
      size: 'md',
      purpose: 'secondary',
    },
    {
      className: 'lg-secondary',
      size: 'lg',
      purpose: 'secondary',
    },
    {
      className: 'xl-secondary',
      size: 'xl',
      purpose: 'secondary',
    },
    {
      className: 'xs-soft',
      size: 'xs',
      purpose: 'soft',
    },
    {
      className: 'sm-soft',
      size: 'sm',
      purpose: 'soft',
    },
    {
      className: 'md-soft',
      size: 'md',
      purpose: 'soft',
    },
    {
      className: 'lg-soft',
      size: 'lg',
      purpose: 'soft',
    },
    {
      className: 'xl-soft',
      size: 'xl',
      purpose: 'soft',
    },
    {
      className: 'xs-link',
      size: 'xs',
      purpose: 'link',
    },
    {
      className: 'sm-link',
      size: 'sm',
      purpose: 'link',
    },
    {
      className: 'md-link',
      size: 'md',
      purpose: 'link',
    },
    {
      className: 'lg-link',
      size: 'lg',
      purpose: 'link',
    },
    {
      className: 'xl-link',
      size: 'xl',
      purpose: 'link',
    },
    {
      className: 'xs-solid',
      size: 'xs',
      purpose: 'solid',
    },
    {
      className: 'sm-solid',
      size: 'sm',
      purpose: 'solid',
    },
    {
      className: 'md-solid',
      size: 'md',
      purpose: 'solid',
    },
    {
      className: 'lg-solid',
      size: 'lg',
      purpose: 'solid',
    },
    {
      className: 'xl-solid',
      size: 'xl',
      purpose: 'solid',
    },
  ]
})

