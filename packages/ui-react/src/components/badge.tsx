import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

const BadgeCVA = cva('badge', {
  variants: {
    showClose:{
      true: 'badge-showClose',
      false: '',
    },
    showDot:{
      true: 'badge-showDot',
      false: '',
    },
    theme: {
      default: 'badge-default',
      error: 'badge-error',
      success: 'badge-success',
      warning: 'badge-warning',
      primary: 'badge-primary',
    },
  },
  defaultVariants: {
    showClose: true,
    showDot: true,
    theme: 'primary',
  },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof BadgeCVA> {
  className?: string;
  badgeText: string;
}

export const Badge: React.FC<BadgeProps> = ({
  className = '',
  showClose,
  showDot,
  theme,
  badgeText,
}) => {
  return (
    <div className={
      BadgeCVA({
      showClose,
      showDot,
      theme,
      className
    })
  }>
        <div>
        </div>
      <p>
        {badgeText}
      </p>
        <div>
            <div>
            </div>
        </div>
    </div>
  );
};