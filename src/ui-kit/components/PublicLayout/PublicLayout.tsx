import React from 'react';

import { Header } from '../Header/Header';

import type { PublicLayoutProps } from './PublicLayout.props';

export const PublicLayout: React.FC<PublicLayoutProps> = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div className="p-4">{children}</div>
    </div>
  );
};

PublicLayout.displayName = 'PublicLayout';
