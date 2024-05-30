import React from 'react';

import { HydrationBoundary } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

import { CustomQueryClientProvider } from '@album/hoc/CustomQueryClientProvider';
import '@album/styles/globals.css';
import { PublicLayout } from '@album/ui-kit/components/PublicLayout/PublicLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomQueryClientProvider>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </HydrationBoundary>
    </CustomQueryClientProvider>
  );
}
