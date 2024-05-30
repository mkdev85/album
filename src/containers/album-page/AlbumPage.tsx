import React from 'react';

import { useRoutes } from '@album/hooks/useRoutes';
import { useGetAlbumsQuery } from '@album/queries/useGetAlbumsQuery';
import { Breadcrumbs } from '@album/ui-kit/components/Breadcrumbs/Breadcrumbs';
import { Card } from '@album/ui-kit/components/Card/Card';

import type { AlbumPageProps } from './AlbumPage.props';

export const AlbumPage: React.FC<AlbumPageProps> = props => {
  const { userId } = props;
  const { data: albumData } = useGetAlbumsQuery({ userId });
  const { gotoHomepage, gotoPhotos } = useRoutes();

  return (
    <div>
      <Breadcrumbs
        items={[
          { title: 'Home', onClick: gotoHomepage },
          { title: 'Album', disabled: true },
        ]}
      />

      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl">Album List</h1>
        <p className="items-center text-md font-medium text-gray-700">User Id: {userId}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {albumData?.map(album => (
          <Card
            key={album.id}
            title={album.title}
            description={`ID: ${album.id}`}
            onClick={() => gotoPhotos(album.id)}
          />
        ))}
      </div>
    </div>
  );
};

AlbumPage.displayName = 'AlbumPage';
