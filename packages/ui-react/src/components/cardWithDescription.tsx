// Generated with Dave
// 
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cx } from 'class-variance-authority'

export interface CardWithDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  body: string;
}

export const CardWithDescription: React.FC<CardWithDescriptionProps> = ({
  className = '',
  title = `The card is just the start`,
  body = `Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation.`,
}) => {
  return (
    <div className={cx('rounded-[0rem] flex p-0 flex-col gap-6 justify-start items-start', className)}>
      <div className="rounded-lg overflow-hidden py-8 px-6 bg-[#efefef]">
      </div>
      <div className="rounded-[0rem] flex p-0 flex-col gap-[0.5625rem] justify-start items-start">
        <p className="st-lead">
          {title}
        </p>
        <p className="st-body">
          {body}
        </p>
      </div>
    </div>
  );
};


