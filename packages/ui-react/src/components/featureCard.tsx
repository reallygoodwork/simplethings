import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof FeatureCardCVA> {
  className?: string;
  property1: 'default' | 'withoutLogo' | 'variant3' | 'variant4';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  className = '',
  property1 = `default`,
}) => {
  return (
    <div className={FeatureCardCVA({ property1, className })}>
      <div className="leadsmalllockup">
        <div className="mejurilogosvg">
          <div className="vector">
          </div>
          <div className="vector">
          </div>
          <div className="vector">
          </div>
          <div className="vector">
          </div>
          <div className="vector">
          </div>
          <div className="vector">
          </div>
        </div>
        <div className="frame40">
          <p className="ourfinanceteamandemployeesalikeloverampforitseaseofusespendvisibilityandexcellentcustomerserviceitsmodernspendcontrolshelpusalltakeaccountabilityfortheoperatingefficiencyofthecompany">
            “Our finance team and employees alike love Ramp for its ease of use, spend visibility, and excellent customer service. Its modern spend controls help us all take accountability for the operating efficiency of the company.”
          </p>
          <p className="ivanmakarovvpoffinancewebflow">
            Ivan Makarov, VP of Finance, Webflow
          </p>
        </div>
      </div>
      <div className="leadsmalllockup">
      </div>
    </div>
  );
};

const FeatureCardCVA = cva('featureCard', {
  variants: {
    property1: {
      default: '',
      withoutLogo: '',
      variant3: '',
      variant4: '',
    },
  },
  defaultVariants: {
    property1: 'default',
  },
  compoundVariants: [
    {
      className: 'default',
      property1: 'default',
    },
    {
      className: 'variant3',
      property1: 'variant3',
    },
    {
      className: 'withoutLogo',
      property1: 'withoutLogo',
    },
    {
      className: 'variant4',
      property1: 'variant4',
    },
  ]
})

