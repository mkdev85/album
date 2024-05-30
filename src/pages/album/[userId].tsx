import React from 'react';

import { QueryClient, dehydrate } from '@tanstack/react-query';

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { AlbumPage } from '@album/containers/album-page/AlbumPage';
import type { AlbumPageProps } from '@album/containers/album-page/AlbumPage.props';
import { getGetAlbumsQuery } from '@album/queries/useGetAlbumsQuery';

const Album: NextPage<AlbumPageProps> = props => {
  const { userId } = props;

  return (
    <>
      <Head>
        <title>Photo Album</title>
      </Head>
      <AlbumPage userId={userId} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const userId = Number(context.query.userId);
  await queryClient.prefetchQuery(getGetAlbumsQuery({ userId }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      userId,
    },
  };
};

export default Album;
