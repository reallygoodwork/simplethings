// Generated with Dave
// 2024-05-29T23:59:57.925Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { Card, type CardProps } from './card'
import { cx } from 'class-variance-authority'

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  cards: CardProps[];
}

export const CardGrid: React.FC<CardGridProps> = ({
  className = '',
  cards = [],
}) => {
  return (
    <div className={cx('flex py-28 px-0 flex-row gap-6 justify-start items-start', className)}>
      {cards.map(props => <Card {...props} />) }
    </div>
  );
};


