import React from 'react';

import { useRoutes } from '@album/hooks/useRoutes';
import { useGetUsersQuery } from '@album/queries/useGetUsersQuery';
import { Card } from '@album/ui-kit/components/Card/Card';

import type { HomePageProps } from './HomePage.props';

export const HomePage: React.FC<HomePageProps> = props => {
  const { data: userData } = useGetUsersQuery();
  const { gotoAlbum } = useRoutes();

  return (
    <div>
      User List:
      {userData?.map(user => (
        <Card key={user.id} id={user.id} name={user.name} onClick={() => gotoAlbum(user.id)} />
      ))}
    </div>
  );
};

HomePage.displayName = 'HomePage';
