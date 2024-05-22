import React from 'react';


export interface HeroHeaderSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const HeroHeaderSection: React.FC<HeroHeaderSectionProps> = ({
  className = '',
}) => {
  return (
    <div className={
      
  }>
      <section />
      <backgroundPattern />
    </div>
  );
};