import React from 'react';

import { useGetUsersQuery } from '@album/queries/useGetUsersQuery';
import { Card } from '@album/ui-kit/components/Card/Card';

import type { HomePageProps } from './HomePage.props';

export const HomePage: React.FC<HomePageProps> = props => {
  const { data: userData } = useGetUsersQuery();

  return (
    <div>
      User List:
      {userData?.map(user => <Card key={user.id} id={user.id} name={user.name} />)}
    </div>
  );
};

HomePage.displayName = 'HomePage';
