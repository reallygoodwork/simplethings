import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardCVA> {
  className?: string;
  showText: boolean;
  imagePadding: 'default' | 'noBottom' | 'noPadding';
}

export const Card: React.FC<CardProps> = ({
  className = '',
  showText = true,
  imagePadding = 'default',
}) => {
  return (
    <div className={CardCVA({ showText, imagePadding, className })}>
      {showText ?
        <div className="leadsmalllockup">
          <p className="thecardisjustthestart">
            The card is just the start
          </p>
          <p className="quioccaecatametadipisicingexcepteursitmollitanimculpaexercitationloremduiscupidatatlaborislaborisexercitation">
            Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation.
          </p>
        </div>
      : null}
      <div className="pexelsphotobykennethsurillo">
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
    imagePadding: {
      default: '',
      noBottom: '',
      noPadding: '',
    },
  },
  defaultVariants: {
    showText: true,
    imagePadding: 'default',
  },
  compoundVariants: [
    {
      className: 'default',
      imagePadding: 'default',
    },
    {
      className: 'noBottom',
      imagePadding: 'noBottom',
    },
    {
      className: 'noPadding',
      imagePadding: 'noPadding',
    },
  ]
})

