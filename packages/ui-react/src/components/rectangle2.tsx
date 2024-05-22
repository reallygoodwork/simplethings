import React from 'react';
import useState from 'react'
import { cva, cx, VariantProps } from 'class-variance-authority'

const Rectangle2CVA = cva('rectangle2', {
  variants: {
    showText:{
      true: 'rectangle2-showText',
      false: '',
    },
    property1: {
      default: 'rectangle2-default',
      variant2: 'rectangle2-variant2',
    },
  },
  defaultVariants: {
    showText: true,
    property1: 'default',
  },
})

export interface Rectangle2Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof Rectangle2CVA> {
  className?: string;
  hello: string;
}

export const Rectangle2: React.FC<Rectangle2Props> = ({
  className = '',
  showText,
  property1,
  hello,
}) => {
  return (
    <div className={
      Rectangle2CVA({
      showText,
      property1,
      className
    })
  }>
      <p>
        {hello}
      </p>
    </div>
  );
};