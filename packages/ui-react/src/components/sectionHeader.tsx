import React from 'react';
import { Button } from './button'
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof SectionHeaderCVA> {
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
  subtitle = 'Qui occaecat amet adipisicing excepteur sit mollit anim culpa exercitation Lorem duis cupidatat laboris laboris exercitation.',
  title = 'The card is just the start',
  showTrailingIcon = false,
  showLeadingIcon = false,
  buttonText = 'Learn More',
  size = 'sm',
  purpose = 'link',
}) => {
  return (
    <div className={SectionHeaderCVA({ showButton, showTrailingIcon, showLeadingIcon, className })}>
      <p className="thecardisjustthestart">
        {title}
      </p>
      <p className="quioccaecatametadipisicingexcepteursitmollitanimculpaexercitationloremduiscupidatatlaborislaborisexercitation">
        {subtitle}
      </p>
      <Button showTrailingIcon={ showTrailingIcon } showLeadingIcon={ showLeadingIcon } buttonText={ buttonText } size={ size } purpose={ purpose }  />
    </div>
  );
};

const SectionHeaderCVA = cva('sectionHeader', {
  variants: {
    showButton:{
      true: '',
      false: '',
    },
    showTrailingIcon:{
      true: '',
      false: '',
    },
    showLeadingIcon:{
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    showButton: true,
    showTrailingIcon: false,
    showLeadingIcon: false,
  },
})

