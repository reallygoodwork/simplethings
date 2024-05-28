// Generated with Anthropocene
// 2024-05-28T16:40:07.324Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface FeatureRowReversedProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof FeatureRowReversedCVA> {
  className?: string;
  cTAText: string;
  title: string;
  showButton: boolean;
  variant: 'default' | 'centered';
}

export const FeatureRowReversed: React.FC<FeatureRowReversedProps> = ({
  className = '',
  cTAText = `Stay in policy and on budget with proactive policy controls, configurable approvals, and AI-powered reconciliation.`,
  title = `Set guardrails to prevent overspending`,
  showButton = true,
  variant = `default`,
}) => {
  return (
    <div className={FeatureRowReversedCVA({showButton, variant, className })}>
      <div className={cx(variant === 'default' && 'rounded-[0rem] flex p-0 flex-col gap-[19.5rem] justify-start items-start', variant === 'centered' && 'rounded-[0rem] flex p-0 flex-col gap-4 justify-center items-start')}>
        <p className="st-large">
          {title}
        </p>
        <div className={cx(variant === 'default' && 'rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start', variant === 'centered' && 'rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start')}>
          <p className="st-subtitle">
            {cTAText}
          </p>
          {showButton ?
            <div className={cx(variant === 'default' && 'rounded-md py-1 px-0 bg-transparent', variant === 'centered' && 'rounded-md py-1 px-0 bg-transparent')}>
              <p className="">
                {buttonText}
              </p>
            </div>
          : null}
        </div>
      </div>
      <div className={cx(variant === 'default' && 'rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]', variant === 'centered' && 'rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]')}>
      </div>
    </div>
  );
};

const FeatureRowReversedCVA = cva('rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between', {
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
    "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between items-start"
  },
  {
    "variant": "centered",
    "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-4 justify-between items-center"
  }
]
})

