// Generated with Dave
// 2024-05-29T16:30:42.020Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { Button } from './button'
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface FeatureRowReversedProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof FeatureRowReversedCVA> {
  className?: string;
  cTAText: string;
  title: string;
  showButton: boolean;
  variant: 'default' | 'centered';
  showTrailingIcon: boolean;
  showLeadingIcon: boolean;
  buttonText: string;
  size: 'xs' | 'sm' | 'md' | 'xl' | 'lg';
  purpose: 'primary' | 'secondary' | 'soft' | 'link' | 'solid';
}

export const FeatureRowReversed: React.FC<FeatureRowReversedProps> = ({
  className = '',
  cTAText = `Stay in policy and on budget with proactive policy controls, configurable approvals, and AI-powered reconciliation.`,
  title = `Set guardrails to prevent overspending`,
  showButton = true,
  variant = 'default',
  showTrailingIcon = false,
  showLeadingIcon = false,
  buttonText = `Learn More`,
  size = 'sm',
  purpose = 'link',
}) => {
  return (
    <div className={FeatureRowReversedCVA({showButton, variant, className })}>
      <div className={cx(variant === 'default' && 'flex p-0 flex-col gap-[19.5rem] justify-start items-start', variant === 'centered' && 'flex p-0 flex-col gap-4 justify-center items-start')}>
        <p className="st-large text-[#1c1b17] text-left">
          {title}
        </p>
        <div className={cx(variant === 'default' && 'flex p-0 flex-col gap-4 justify-start items-start', variant === 'centered' && 'flex p-0 flex-col gap-4 justify-start items-start')}>
          <p className="st-subtitle text-[#1c1b17cc] text-left">
            {cTAText}
          </p>
          {showButton ?
            <Button showTrailingIcon={showTrailingIcon} showLeadingIcon={showLeadingIcon} buttonText={buttonText} size={size} purpose={purpose}  />
          : null}
        </div>
      </div>
      <div className={cx(variant === 'default' && 'rounded-lg flex max-w-[35.5rem] w-full overflow-hidden py-8 px-6 flex-col justify-start items-start bg-[#efefef]', variant === 'centered' && 'rounded-lg flex max-w-[35.5rem] w-full overflow-hidden py-8 px-6 flex-col justify-start items-start bg-[#efefef]')}>
      </div>
    </div>
  );
};

const FeatureRowReversedCVA = cva('border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex py-16 px-0 flex-row gap-4 justify-between', {
  variants: {
  "showButton": {
    "true": "",
    "false": ""
  },
  "variant": {
    "default": "",
    "centered": ""
  }
},
  defaultVariants: {
  "variant": "default"
},
  compoundVariants: [
  {
    "variant": "default",
    "className": "border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex py-16 px-0 flex-row gap-4 justify-between items-start"
  },
  {
    "variant": "centered",
    "className": "border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex py-16 px-0 flex-row gap-4 justify-between items-center"
  }
]
})

