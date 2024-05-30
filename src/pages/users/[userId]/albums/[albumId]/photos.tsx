import React from 'react';

import { QueryClient, dehydrate } from '@tanstack/react-query';

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { PhotoPage } from '@album/containers/photo-page/PhotoPage';
import type { PhotoPageProps } from '@album/containers/photo-page/PhotoPage.props';
import { getGetPhotosQuery } from '@album/queries/useGetPhotosQuery';

const Photo: NextPage<PhotoPageProps> = props => {
  const { albumId, userId } = props;

  return (
    <>
      <Head>
        <title>Photo Album</title>
      </Head>
      <PhotoPage albumId={albumId} userId={userId} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const albumId = Number(context.query.albumId);
  const userId = Number(context.query.userId);
  await queryClient.prefetchQuery(getGetPhotosQuery({ albumId }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      albumId,
      userId,
    },
  };
};

export default Photo;