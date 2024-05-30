import React from 'react';

import { QueryClient, dehydrate } from '@tanstack/react-query';

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { HomePage } from '@album/containers/home-page/HomePage';
import { getGetUsersQuery } from '@album/queries/useGetUsersQuery';

const Home: NextPage = props => {
  return (
    <>
      <Head>
        <title>Photo Album</title>
      </Head>
      <HomePage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getGetUsersQuery());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
