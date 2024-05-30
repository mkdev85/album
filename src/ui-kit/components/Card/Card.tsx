import React from 'react';

import type { CardProps } from './Card.props';

export const Card: React.FC<CardProps> = props => {
  const { title, description, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight capitalize text-gray-900 line-clamp-2">
        {title}
      </h5>
      <p className="font-normal text-gray-600">{description}</p>
    </div>
  );
};

Card.displayName = 'Card';
