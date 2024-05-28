// Generated with Anthropocene
// 
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cx } from 'class-variance-authority'

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  subtitle: string;
  title: string;
}

export const Hero: React.FC<HeroProps> = ({
  className = '',
  subtitle = `Eco-friendly designs, templates and code to help build your dream business while respecting the earth`,
  title = `It’s giving green.`,
}) => {
  return (
    <div className={cx('rounded-[0rem] h-[23.75rem] overflow-hidden p-2.5 bg-[#17332d]', className)}>
      <div className="">
        <div className="">
          <p className="st-hero">
            {title}
          </p>
          <p className="st-subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};


