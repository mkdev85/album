import React from 'react';

import { HydrationBoundary } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

import { CustomQueryClientProvider } from '@ablum/hoc/CustomQueryClientProvider';
import '@ablum/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomQueryClientProvider>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </CustomQueryClientProvider>
  );
}
