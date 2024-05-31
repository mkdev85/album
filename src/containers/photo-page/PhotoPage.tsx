import React from 'react';

import { useRouter } from 'next/router';

import { useRoutes } from '@album/hooks/useRoutes';
import { useGetPhotosQuery } from '@album/queries/useGetPhotosQuery';
import { Breadcrumbs } from '@album/ui-kit/components/Breadcrumbs/Breadcrumbs';
import { HoverText } from '@album/ui-kit/components/HoverText/HoverText';
import { Loader } from '@album/ui-kit/components/Loader/Loader';

import type { PhotoPageProps } from './PhotoPage.props';
import { AlbumImage } from './components/AlbumImage/AlbumImage';

export const PhotoPage: React.FC<PhotoPageProps> = props => {
  const router = useRouter();

  const albumId = Number(router.query.albumId);
  const userId = Number(router.query.userId);

  const { data: photoData, isLoading } = useGetPhotosQuery({ albumId });
  const { gotoHomepage, gotoAlbums } = useRoutes();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="py-4">
      <Breadcrumbs
        items={[
          { title: 'Home', onClick: gotoHomepage },
          { title: 'Album', onClick: () => gotoAlbums(userId) },
          { title: 'Photo', disabled: true },
        ]}
      />

      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl">Photos List</h1>
        <p className="items-center text-md font-medium text-gray-700">Album Id: {albumId}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {photoData?.map((photo, index) => (
          <div
            key={photo.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative"
          >
            <AlbumImage src={photo.url} alt={photo.title} priority={index < 5} />

            <div className="p-2">
              <HoverText
                className="text-xl font-bold tracking-tight text-gray-900 first-letter:uppercase"
                text={photo.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PhotoPage.displayName = 'PhotoPage';
