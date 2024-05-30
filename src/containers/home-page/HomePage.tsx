import React from 'react';

import { userIdLSKey } from '@album/constants/localStorageKeys';
import { useRoutes } from '@album/hooks/useRoutes';
import { useGetUsersQuery } from '@album/queries/useGetUsersQuery';
import { UserCard } from '@album/ui-kit/components/UserCard/UserCard';

import type { HomePageProps } from './HomePage.props';

export const HomePage: React.FC<HomePageProps> = props => {
  const { data: userData } = useGetUsersQuery();
  const { gotoAlbum } = useRoutes();

  const handleClick = (userId: number) => {
    gotoAlbum(userId);
    localStorage.setItem(userIdLSKey, String(userId));
  };

  return (
    <div>
      <h3 className="text-xl font-bold leading-none text-gray-900 mb-8">User List</h3>
      <div className="flow-root">
        <div className="lg:flex flex-wrap gap-x-6 gap-y-4">
          {userData?.map(user => (
            <div key={user.id} className="lg:basis-[calc(50%-12px)]">
              <UserCard
                userData={user}
                onClick={() => {
                  handleClick(user.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HomePage.displayName = 'HomePage';
