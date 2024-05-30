// Generated with Dave
// 2024-05-30T00:03:26.921Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { Button } from './button'
import { cx } from 'class-variance-authority'

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  showButton: boolean;
  subtitle: string;
  title: string;
  showTrailingIcon: boolean;
  showLeadingIcon: boolean;
  buttonText: string;
  size: 'xs' | 'sm' | 'md' | 'xl' | 'lg';
  purpose: 'primary' | 'secondary' | 'soft' | 'link' | 'solid';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className = '',
  showButton = true,
  subtitle = `Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation.`,
  title = `The card is just the start`,
  showTrailingIcon = false,
  showLeadingIcon = false,
  buttonText = `Learn More`,
  size = 'sm',
  purpose = 'link',
}) => {
  return (
    <div className={cx('flex pt-40 pb-0 px-0 flex-col gap-[0.8556249737739563rem] justify-start items-center', className)}>
      <p className="st-title text-black text-center">
        {title}
      </p>
      <p className="st-heading text-[#1c1b17cc] text-center">
        {subtitle}
      </p>
      {showButton ?
        <Button showTrailingIcon={showTrailingIcon} showLeadingIcon={showLeadingIcon} buttonText={buttonText} size={size} purpose={purpose}  />
      : null}
    </div>
  );
};


