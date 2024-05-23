import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof BadgeCVA> {
  className?: string;
  badgeText: string;
  showClose: boolean;
  showDot: boolean;
  theme: 'default' | 'error' | 'success' | 'warning' | 'primary';
}

export const Badge: React.FC<BadgeProps> = ({
  className = '',
  badgeText = 'Badge',
  showClose = true,
  showDot = true,
  theme = 'primary',
}) => {
  return (
    <div className={BadgeCVA({ showClose, showDot, theme, className })}>
      {showDot ?
        <div className="ellipse1">
        </div>
      : null}
      <p className="badge">
        {badgeText}
      </p>
      {showClose ?
        <div className="iconamooncloselight">
          <div className="vector">
          </div>
        </div>
      : null}
    </div>
  );
};

const BadgeCVA = cva('badge', {
  variants: {
    showClose:{
      true: '',
      false: '',
    },
    showDot:{
      true: '',
      false: '',
    },
    theme: {
      default: '',
      error: '',
      success: '',
      warning: '',
      primary: '',
    },
  },
  defaultVariants: {
    showClose: true,
    showDot: true,
    theme: 'primary',
  },
  compoundVariants: [
    {
      className: 'primary',
      theme: 'primary',
    },
    {
      className: 'error',
      theme: 'error',
    },
    {
      className: 'success',
      theme: 'success',
    },
    {
      className: 'warning',
      theme: 'warning',
    },
    {
      className: 'default',
      theme: 'default',
    },
  ]
})

