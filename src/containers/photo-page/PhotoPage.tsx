import React from 'react';

import Image from 'next/image';

import { userIdLSKey } from '@album/constants/localStorageKeys';
import { useRoutes } from '@album/hooks/useRoutes';
import { useGetPhotosQuery } from '@album/queries/useGetPhotosQuery';
import { Breadcrumbs } from '@album/ui-kit/components/Breadcrumbs/Breadcrumbs';

import type { PhotoPageProps } from './PhotoPage.props';

export const PhotoPage: React.FC<PhotoPageProps> = props => {
  const { albumId } = props;
  const { data: photoData } = useGetPhotosQuery({ albumId });
  const { gotoHomepage, gotoAlbum } = useRoutes();

  const handleAlumbClick = () => {
    const userId = localStorage.getItem(userIdLSKey);
    gotoAlbum(Number(userId));
  };

  return (
    <div>
      <Breadcrumbs
        items={[
          { title: 'Home', onClick: gotoHomepage },
          { title: 'AlumbId', onClick: handleAlumbClick },
        ]}
      />
      Photo List:
      {photoData?.map(photo => (
        <div key={photo.id}>
          album ID: {photo.albumId}
          <Image
            src={photo.url}
            alt={photo.title}
            width={250}
            height={250}
            priority
            placeholder="blur"
            blurDataURL="/images/image-placeholder.png"
          />
        </div>
      ))}
    </div>
  );
};

PhotoPage.displayName = 'PhotoPage';
