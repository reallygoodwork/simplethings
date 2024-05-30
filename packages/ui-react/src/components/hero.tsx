// Generated with Dave
// 2024-05-30T00:03:37.573Z
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
    <div className={cx('w-full flex p-2.5 flex-row justify-center items-start bg-[#17332d]', className)}>
      <div className="flex max-w-[90rem] pt-32 pb-20 px-6 flex-col justify-start items-center">
        <div className="flex max-w-[37.5rem] p-0 flex-col gap-6 justify-start items-center">
          <p className="st-hero text-white text-center">
            {title}
          </p>
          <p className="st-subtitle text-[#aabca3] text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};


