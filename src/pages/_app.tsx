import React from 'react';

import { HydrationBoundary } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

import { CustomQueryClientProvider } from '@album/hoc/CustomQueryClientProvider';
import '@album/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomQueryClientProvider>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </CustomQueryClientProvider>
  );
}
