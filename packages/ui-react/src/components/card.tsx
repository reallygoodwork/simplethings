import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardCVA> {
  className?: string;
  title: string;
  showText: boolean;
  body: string;
  variant: 'default' | 'noBottom' | 'noPadding';
}

export const Card: React.FC<CardProps> = ({
  className = '',
  title = `You Believe in Authority`,
  showText = true,
  body = `'Cause, baby, I'm an anarchist. You're a spineless liberal. We marched together for the eight-hour day`,
  variant = `default`,
}) => {
  return (
    <div className={CardCVA({ showText, variant, className })}>
      {showText ?
        <div className="cardbody">
          <p className="title">
            {title}
          </p>
          <p className="body">
            {body}
          </p>
        </div>
      : null}
      <div className="image">
      </div>
    </div>
  );
};

const CardCVA = cva('card', {
  variants: {
    showText:{
      true: '',
      false: '',
    },
    variant: {
      default: '',
      noBottom: '',
      noPadding: '',
    },
  },
  defaultVariants: {
    showText: true,
    variant: 'default',
  },
  compoundVariants: [
    {
      className: 'default',
      variant: 'default',
    },
    {
      className: 'noBottom',
      variant: 'noBottom',
    },
    {
      className: 'noPadding',
      variant: 'noPadding',
    },
  ]
})

