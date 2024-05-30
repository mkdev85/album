import React from 'react';

import IconChevonRight from '@album/ui-kit/iconComponents/IconChevonRight';

import type { BreadcrumbsProps } from './Breadcrumbs.props';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = props => {
  const { items } = props;

  return (
    <nav className="flex py-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li
            className={`inline-flex items-center cursor-pointer ${
              item.disabled ? 'opacity-50 pointer-events-none' : ''
            }`}
            key={item.title}
            onClick={item.onClick}
          >
            <div className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              {item.title}

              {index !== items.length - 1 && (
                <IconChevonRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
