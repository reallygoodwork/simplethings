// Generated with Dave
// 2024-05-29T20:18:22.482Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof FeatureCardCVA> {
  className?: string;
  showLogo: boolean;
  attribution: string;
  quote: string;
  variant: 'default' | 'light';
  imageURI: string;
  imageAlt: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  className = '',
  showLogo = true,
  attribution = `lorem ipsum dolor sit`,
  quote = `Velit commodo ipsum nulla labore incididunt ullamco ad voluptate cupidatat commodo. Veniam ex ad magna id. Adipisicing quis ut incididunt elit. Occaecat exercitation id aliqua exercitation eu laborum tempor nisi est aliqua enim ex voluptate.`,
  variant = 'default',
  imageURI = ``,
  imageAlt = `Alt Text Missing`,
}) => {
  return (
    <div className={FeatureCardCVA({showLogo, variant, className })}>
      <div className={cx(variant === 'default' && 'flex p-8 flex-col justify-between items-start', variant === 'light' && 'flex p-8 flex-col justify-between items-start')}>
        
          <div className={cx(variant === 'default' && 'flex pt-0 pb-16 px-0 flex-row gap-[0.6875rem] justify-start items-start', variant === 'light' && 'flex pt-0 pb-16 px-0 flex-row gap-[0.6875rem] justify-start items-start')}>
            
            <div className={cx(variant === 'default' && 'flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]', variant === 'light' && 'flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]')}>
            </div>
          </div>
        {showLogo ?
          <div className={cx(variant === 'default' && 'flex pt-0 pb-16 px-0 flex-row gap-[0.6875rem] justify-start items-start', variant === 'light' && 'flex pt-0 pb-16 px-0 flex-row gap-[0.6875rem] justify-start items-start')}>
            <div className={cx(variant === 'default' && 'flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]flex flex-row bg-[#e4ebf6]', variant === 'light' && 'flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]flex flex-row bg-[#1c1b17]')}>
            </div>
          </div>
        : null}
        <div className={cx(variant === 'default' && 'flex p-0 flex-col gap-6 justify-start items-start', variant === 'light' && 'flex p-0 flex-col gap-6 justify-start items-start')}>
          <p className="st-subtitle text-white text-left">
            {quote}
          </p>
          <p className="st-body text-[#aabca3] text-left">
            {attribution}
          </p>
        </div>
      </div>
      
        <div className={cx(variant === 'default' && 'rounded-lg flex max-w-[32.5rem] w-full overflow-hidden p-0 flex-col justify-start items-center', variant === 'light' && 'rounded-lg flex max-w-[32.5rem] w-full overflow-hidden p-0 flex-col justify-start items-center')}>
          <img src={imageURI} alt={imageAlt} />
        </div>
    </div>
  );
};

const FeatureCardCVA = cva('rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start', {
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
    "className": "rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start bg-[#17332d]"
  },
  {
    "variant": "light",
    "className": "rounded-lg flex max-w-[90rem] overflow-hidden p-4 flex-row gap-4 justify-start items-start bg-[#f4f3f3]"
  }
]
})

