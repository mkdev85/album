import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { routes } from '@album/hooks/routes';

import type { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = props => {
  const router = useRouter();
  const isHomePage = router.pathname === routes.homepage;

  return (
    <header className="bg-blue-100 sticky z-10 top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={routes.homepage} className="-m-1.5 font-bold text-2xl text-blue-600">
            Album
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={routes.homepage}
            className={`text-sm font-semibold leading-6 text-gray-900 ${
              isHomePage ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            <span className="inline-block leading-none align-bottom text-4xl">&#8592;</span> Back to
            home
          </Link>
        </div>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
