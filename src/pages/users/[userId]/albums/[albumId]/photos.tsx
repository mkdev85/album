import React from 'react';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const PhotoPage = dynamic(
  async () => import('@album/containers/photo-page/PhotoPage').then(module => module.PhotoPage),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  },
);

const Photo: NextPage = props => {
  return (
    <>
      <Head>
        <title>Photo Album</title>
      </Head>
      <PhotoPage />
    </>
  );
};

export default Photo;
