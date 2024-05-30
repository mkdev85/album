import React from 'react';

import type { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = props => {
  return (
    <header>
      <nav className="bg-primary border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1>Photo Album</h1>
        </div>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
