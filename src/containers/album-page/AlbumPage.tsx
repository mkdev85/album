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
      <Breadcrumbs items={[{ title: 'Home', onClick: gotoHomepage }]} />
      Album List:
      {albumData?.map(album => (
        <div key={album.id}>
          userId: {album.userId}
          <Card id={album.id} name={album.title} onClick={() => gotoPhotos(album.id)} />
        </div>
      ))}
    </div>
  );
};

AlbumPage.displayName = 'AlbumPage';
