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
  badgeText = `Badge`,
  showClose = true,
  showDot = true,
  theme = `primary`,
}) => {
  return (
    <div className={

    }>
      {showDot ?
        <div className="dot">
        </div>
      : null}
      <p className="">
        {badgeText}
      </p>
      {showClose ?
        <div className="close">
          <div className="vector">
          </div>
        </div>
      : null}
    </div>
  );
};

const BadgeCVA = cva('', {
  variants: {
  },


})

