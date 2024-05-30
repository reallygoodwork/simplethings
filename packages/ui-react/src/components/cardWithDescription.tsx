// Generated with Dave
// 2024-05-30T00:01:28.317Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cx } from 'class-variance-authority'

export interface CardWithDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  body: string;
  imageURI: string;
  imageAlt: string;
}

export const CardWithDescription: React.FC<CardWithDescriptionProps> = ({
  className = '',
  title = `The card is just the start`,
  body = `Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation.`,
  imageURI = ``,
  imageAlt = `Alt Text Missing`,
}) => {
  return (
    <div className={cx('flex p-0 flex-col gap-6 justify-start items-start', className)}>
      <div className="flex h-[12.5rem] w-[19rem] flex-row bg-[#d9d9d9]">
      </div>
      <div className="flex p-0 flex-col gap-[0.5625rem] justify-start items-start">
        <p className="st-lead text-[#1c1b17] text-left">
          {title}
        </p>
        <p className="st-body text-[#1c1b17cc] text-left">
          {body}
        </p>
      </div>
    </div>
  );
};


