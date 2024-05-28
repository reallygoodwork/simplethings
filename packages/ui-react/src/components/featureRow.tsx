// Generated with Anthropocene
// 2024-05-28T19:12:59.216Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { Button } from './button'
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface FeatureRowProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof FeatureRowCVA> {
  className?: string;
  cTAText: string;
  title: string;
  showButton: boolean;
  variant: 'alternate' | 'centeredAlt';
  showTrailingIcon: boolean;
  showLeadingIcon: boolean;
  buttonText: string;
  size: 'xs' | 'sm' | 'md' | 'xl' | 'lg';
  purpose: 'primary' | 'secondary' | 'soft' | 'link' | 'solid';
}

export const FeatureRow: React.FC<FeatureRowProps> = ({
  className = '',
  cTAText = `Stay in policy and on budget with proactive policy controls, configurable approvals, and AI-powered reconciliation.`,
  title = `Set guardrails to prevent overspending`,
  showButton = true,
  variant = `alternate`,
  showTrailingIcon = false,
  showLeadingIcon = false,
  buttonText = `Learn More`,
  size = `sm`,
  purpose = `link`,
}) => {
  return (
    <div className={FeatureRowCVA({showButton, variant, className })}>
      <div className={cx(variant === 'alternate' && 'rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]', variant === 'centeredAlt' && 'rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]')}>
      </div>
      <div className={cx(variant === 'alternate' && 'rounded-[0rem] flex p-0 flex-col gap-[19.5rem] justify-start items-start', variant === 'centeredAlt' && 'rounded-[0rem] flex p-0 flex-col gap-4 justify-center items-start')}>
        <p className="st-large">
          {title}
        </p>
        <div className={cx(variant === 'alternate' && 'rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start', variant === 'centeredAlt' && 'rounded-[0rem] flex p-0 flex-col gap-4 justify-start items-start')}>
          <p className="st-subtitle">
            {cTAText}
          </p>
          {showButton ?
            <Button showTrailingIcon={showTrailingIcon} showLeadingIcon={showLeadingIcon} buttonText={buttonText} size={size} purpose={purpose}  />
          : null}
        </div>
      </div>
    </div>
  );
};

const FeatureRowCVA = cva('rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start', {
  variants: {
  "showButton": {
    "true": "",
    "false": ""
  },
  "variant": {
    "alternate": "",
    "centeredAlt": ""
  }
},
  defaultVariants: {
  "variant": "alternate"
},
  compoundVariants: [
  {
    "variant": "alternate",
    "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start items-start"
  },
  {
    "variant": "centeredAlt",
    "className": "rounded-[0rem] border-t border-l-0 border-r-0 border-b border-[#e2e2e2] flex h-[39.25rem] py-16 px-0 gap-[9.75rem] justify-start items-center"
  }
]
})

