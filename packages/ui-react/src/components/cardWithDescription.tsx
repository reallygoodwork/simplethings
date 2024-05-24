import React from 'react';

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
    <div className={className}>
      <div className="card">
      </div>
      <div className="body">
        <p className="thecardisjustthestart">
          {title}
        </p>
        <p className="quioccaecatametadipisicingexcepteursitmollitanimculpaexercitationloremduiscupidatatlaborislaborisexercitation">
          {body}
        </p>
      </div>
    </div>
  );
};


