import React from 'react';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const AlbumPage = dynamic(
  async () => import('@album/containers/album-page/AlbumPage').then(module => module.AlbumPage),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  },
);

const Album: NextPage = props => {
  return (
    <>
      <Head>
        <title>Photo Album</title>
      </Head>
      <AlbumPage />
    </>
  );
};

export default Album;
