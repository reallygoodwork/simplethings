// Generated with Anthropocene
// 2024-05-28T15:25:35.203Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

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
    <div className={BadgeCVA({showClose, showDot, theme, className })}>
      {showDot ?
        <div className={cx(theme === 'primary' && 'bg-[#6c8463]', theme === 'error' && 'bg-[#f23051]', theme === 'success' && 'bg-[#418b75]', theme === 'warning' && 'bg-[#fd7e14]', theme === 'default' && 'bg-[#8a8577]')}>
        </div>
      : null}
      <p className="">
        {badgeText}
      </p>
      {showClose ?
        <div className={cx(theme === 'primary' && 'rounded-[0rem] w-3.5 overflow-hidden p-0 relative', theme === 'error' && 'rounded-[0rem] w-3.5 overflow-hidden p-0 relative', theme === 'success' && 'rounded-[0rem] w-3.5 overflow-hidden p-0 relative', theme === 'warning' && 'rounded-[0rem] w-3.5 overflow-hidden p-0 relative', theme === 'default' && 'rounded-[0rem] w-3.5 overflow-hidden p-0 relative')}>
          <div className={cx(theme === 'primary' && '', theme === 'error' && '', theme === 'success' && '', theme === 'warning' && '', theme === 'default' && '')}>
          </div>
        </div>
      : null}
    </div>
  );
};

const BadgeCVA = cva('rounded-[624.9375rem] border flex px-2 gap-1.5 items-center', {
  variants: {
  "showClose": {
    "true": "",
    "false": ""
  },
  "showDot": {
    "true": "",
    "false": ""
  },
  "theme": {
    "default": "",
    "error": "",
    "success": "",
    "warning": "",
    "primary": ""
  }
},
  defaultVariants: {
  "theme": "primary"
},
  compoundVariants: [
  {
    "theme": "primary",
    "className": "rounded-[624.9375rem] border border-[#aabca3] flex h-[1.3125rem] pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-between items-center bg-[#ebefe9]"
  },
  {
    "theme": "error",
    "className": "rounded-[624.9375rem] border border-rose-300 flex py-1 px-2 gap-1.5 justify-start items-center bg-rose-100"
  },
  {
    "theme": "success",
    "className": "rounded-[624.9375rem] border border-[#85c3ae] flex py-1 px-2 gap-1.5 justify-start items-center bg-[#d9eee6]"
  },
  {
    "theme": "warning",
    "className": "rounded-[624.9375rem] border border-[#ffa94d] flex pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-start items-center bg-[#fdeed7]"
  },
  {
    "theme": "default",
    "className": "rounded-[624.9375rem] border border-[#cdc9c2] flex pt-[0.1875rem] pb-1 px-2 gap-1.5 justify-start items-center bg-[#e6e4e1]"
  }
]
})

