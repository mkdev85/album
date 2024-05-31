import React from 'react';

import IconCircular from '@album/ui-kit/iconComponents/IconCircular';

import type { LoaderProps } from './Loader.props';

export const Loader: React.FC<LoaderProps> = props => {
  return (
    <div role="status">
      <IconCircular
        className={`w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Loader.displayName = 'Loader';
