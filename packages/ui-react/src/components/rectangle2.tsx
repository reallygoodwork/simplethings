import React from 'react';
import useState from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const Rectangle2CVA = cva('rectangle2', {
  variants: {

  }
})

export interface Rectangle2Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof Rectangle2CVA> {
  className?: string;
}

export const Rectangle2: React.FC<Rectangle2Props> = ({ className = '' }) => {
  return (
    <div className={className}>
       <p></p>
    </div>
  );
};