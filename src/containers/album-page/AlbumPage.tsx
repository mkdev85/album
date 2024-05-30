import React from 'react';

import { useGetAlbumsQuery } from '@album/queries/useGetAlbumsQuery';
import { Card } from '@album/ui-kit/components/Card/Card';

import type { AlbumPageProps } from './AlbumPage.props';

export const AlbumPage: React.FC<AlbumPageProps> = props => {
  const { userId } = props;
  const { data: albumData } = useGetAlbumsQuery({ userId });

  return (
    <div>
      Album List:
      {albumData?.map(album => (
        <div key={album.id}>
          userId: {album.userId}
          <Card id={album.id} name={album.title} />
        </div>
      ))}
    </div>
  );
};

AlbumPage.displayName = 'AlbumPage';
