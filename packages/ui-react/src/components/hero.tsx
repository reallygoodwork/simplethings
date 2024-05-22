import React from 'react';


export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  className = '',
}) => {
  return (
    <div className={className}>
        <div>
            <div>
              <p className="">
                It’s giving green.
              </p>
              <p className="">
                Eco-friendly designs, templates and code to help build your dream business while respecting the earth
              </p>
            </div>
        </div>
    </div>
  );
};