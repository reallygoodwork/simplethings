// Generated with Anthropocene
// 2024-05-28T15:29:03.806Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardCVA> {
  className?: string;
  body: string;
  title: string;
  showText: boolean;
  variant: 'default' | 'noBottom' | 'noPadding';
}

export const Card: React.FC<CardProps> = ({
  className = '',
  body = `'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day`,
  title = `You Believe in Authority`,
  showText = true,
  variant = `default`,
}) => {
  return (
    <div className={CardCVA({showText, variant, className })}>
      {showText ?
        <div className={cx(variant === 'default' && 'rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center', variant === 'noBottom' && 'rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center', variant === 'noPadding' && 'rounded-[0rem] flex max-w-[16.25rem] p-0 flex-col gap-2 justify-start items-center')}>
          <p className="st-lead--tight">
            {title}
          </p>
          <p className="st-small">
            {body}
          </p>
        </div>
      : null}
      <div className={cx(variant === 'default' && 'rounded-[0rem] h-[25.75rem] w-[37.5rem]', variant === 'noBottom' && 'rounded-[0rem] h-[25.75rem] w-[37.5rem]', variant === 'noPadding' && 'rounded-[0rem] h-[25.75rem] w-[37.5rem]')}>
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

