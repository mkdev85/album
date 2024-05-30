import React from 'react';

import type { BreadcrumbsProps } from './Breadcrumbs.props';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = props => {
  const { items } = props;

  return (
    <nav>
      <ol className="list-reset flex">
        {items.map(item => (
          <li key={item.title} onClick={item.onClick}>
            {item.title}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
