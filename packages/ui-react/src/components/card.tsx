// Generated with Dave
// 2024-05-30T00:02:31.694Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardCVA> {
  className?: string;
  body: string;
  title: string;
  showText: boolean;
  variant: 'default' | 'noBottom' | 'noPadding';
  imageURI: string;
  imageAlt: string;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  body = `'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day`,
  title = `You Believe in Authority`,
  showText = true,
  variant = 'default',
  imageURI = ``,
  imageAlt = `Alt Text Missing`,
}) => {
  return (
    <div className={CardCVA({showText, variant, className })}>
      
        <div className={cx(variant === 'default' && 'flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center', variant === 'noBottom' && 'flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center', variant === 'noPadding' && 'flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center')}>
          
          <p className="st-lead--tight text-black text-left">
            {title}
          </p>
          <p className="st-small text-[#1c1b1799] text-center">
            {body}
          </p>
        </div>
      {showText ?
        <div className={cx(variant === 'default' && 'flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center', variant === 'noBottom' && 'flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center', variant === 'noPadding' && 'flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center')}>
          <p className="st-lead--tight text-black text-left">
            {title}
          </p>
          <p className="st-small text-[#1c1b1799] text-center">
            {body}
          </p>
        </div>
      : null}
      
        <div className={cx(variant === 'default' && 'flex h-[25.75rem] w-[37.5rem] flex-row', variant === 'noBottom' && 'flex h-[25.75rem] w-[37.5rem] flex-row', variant === 'noPadding' && 'flex h-[25.75rem] w-[37.5rem] flex-row')}>
          <img src={imageURI} alt={imageAlt} />
        </div>
    </div>
  );
};

const CardCVA = cva('rounded-lg flex overflow-hidden flex-col gap-4 justify-start items-center bg-[#efefef]', {
  variants: {
  "showText": {
    "true": "",
    "false": ""
  },
  "variant": {
    "default": "",
    "noBottom": "",
    "noPadding": ""
  }
},
  defaultVariants: {
  "variant": "default"
},
  compoundVariants: [
  {
    "variant": "default",
    "className": "rounded-lg flex overflow-hidden py-8 px-6 flex-col gap-4 justify-start items-center bg-[#efefef]"
  },
  {
    "variant": "noBottom",
    "className": "rounded-lg flex overflow-hidden pt-8 pb-0 px-6 flex-col gap-4 justify-start items-center bg-[#efefef]"
  },
  {
    "variant": "noPadding",
    "className": "rounded-lg flex overflow-hidden pt-8 pb-0 px-0 flex-col gap-4 justify-start items-center bg-[#efefef]"
  }
]
})

