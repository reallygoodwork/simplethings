import React from 'react';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  className = '',
}) => {
  return (
    <div className={className}>
        <div className="Container">
          <BadgeGroup />
            <div className="Frame37">
              <p className="itsgivinggreen">
                It’s giving green.
              </p>
              <p className="ecofriendlydesignstemplatesandcodetohelpbuildyourdreambusinesswhilerespectingtheearth">
                Eco-friendly designs, templates and code to help build your dream business while respecting the earth
              </p>
            </div>
          <CtaInputForm />
        </div>
    </div>
  );
};


