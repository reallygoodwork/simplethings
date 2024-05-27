// Generated with Anthropocene
// 2024-05-27T19:53:18.297Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof FeatureCardCVA> {
  className?: string;
  showLogo: boolean;
  attribution: string;
  quote: string;
  variant: 'default' | 'light';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  className = '',
  showLogo = true,
  attribution = `lorem ipsum dolor sit`,
  quote = `Velit commodo ipsum nulla labore incididunt ullamco ad voluptate cupidatat commodo. Veniam ex ad magna id. Adipisicing quis ut incididunt elit. Occaecat exercitation id aliqua exercitation eu laborum tempor nisi est aliqua enim ex voluptate.`,
  variant = `default`,
}) => {
  return (
    <div className={FeatureCardCVA({showLogo, variant, className })}>
      <div className={cx(variant === 'default' && 'rounded-[0rem] flex p-8 flex-col justify-between items-start', variant === 'light' && 'rounded-[0rem] flex p-8 flex-col justify-between items-start')}>
        {showLogo ?
          <div className={cx(variant === 'default' && 'rounded-[0rem] flex pt-0 pb-16 px-0 gap-[0.6875rem] justify-start items-start', variant === 'light' && 'rounded-[0rem] flex pt-0 pb-16 px-0 gap-[0.6875rem] justify-start items-start')}>
            <div className={cx(variant === 'default' && 'bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]bg-[#e4ebf6]', variant === 'light' && 'bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]bg-[#1c1b17]')}>
            </div>
          </div>
        : null}
        <div className={cx(variant === 'default' && 'rounded-[0rem] flex p-0 flex-col gap-6 justify-start items-start', variant === 'light' && 'rounded-[0rem] flex p-0 flex-col gap-6 justify-start items-start')}>
          <p className="st-subtitle">
            {quote}
          </p>
          <p className="st-body">
            {attribution}
          </p>
        </div>
      </div>
      <div className={cx(variant === 'default' && 'rounded-lg p-0', variant === 'light' && 'rounded-lg p-0')}>
      </div>
    </div>
  );
};

const FeatureCardCVA = cva('rounded-lg flex h-[36rem] overflow-hidden p-4 gap-4 justify-start items-start', {
  variants: {
  "showLogo": {
    "true": "",
    "false": ""
  },
  "variant": {
    "default": "",
    "light": ""
  }
},
  defaultVariants: {
  "variant": "default"
},
  compoundVariants: [
  {
    "variant": "default",
    "className": "rounded-lg flex h-[36rem] w-[6.25rem] overflow-hidden p-4 gap-4 justify-start items-start bg-[#17332d]"
  },
  {
    "variant": "light",
    "className": "rounded-lg flex h-[36rem] w-[6.25rem] overflow-hidden p-4 gap-4 justify-start items-start bg-[#f4f3f3]"
  }
]
})

