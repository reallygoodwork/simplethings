import React from 'react';
import { Card } from './card'
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardGridCVA> {
  className?: string;
  showText: boolean;
  imagePadding: 'default' | 'noBottom' | 'noPadding';
}

export const CardGrid: React.FC<CardGridProps> = ({
  className = '',
  showText = false,
  imagePadding = `default`,
}) => {
  return (
    <div className={CardGridCVA({ showText, className })}>
      <Card showText={ showText } imagePadding={ imagePadding }  />
      <Card showText={ showText } imagePadding={ imagePadding }  />
      <Card showText={ showText } imagePadding={ imagePadding }  />
      <Card showText={ showText } imagePadding={ imagePadding }  />
      <Card showText={ showText } imagePadding={ imagePadding }  />
    </div>
  );
};

const CardGridCVA = cva('', {
  variants: {
    showText:{
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    showText: false,
  },
})

