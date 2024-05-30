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
          { title: 'Album', onClick: handleAlumbClick },
          { title: 'Photo', disabled: true },
        ]}
      />

      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl">Photos List</h1>
        <p className="items-center text-md font-medium text-gray-700">Album Id: {albumId}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-4">
        {photoData?.map(photo => (
          <div key={photo.id} className="relative">
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="!static"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              priority
              placeholder="blur"
              blurDataURL="/images/image-placeholder.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

PhotoPage.displayName = 'PhotoPage';
