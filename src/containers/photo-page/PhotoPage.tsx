import React from 'react';

import Image from 'next/image';

import { useGetPhotosQuery } from '@album/queries/useGetPhotosQuery';

import type { PhotoPageProps } from './PhotoPage.props';

export const PhotoPage: React.FC<PhotoPageProps> = props => {
  const { albumId } = props;
  const { data: photoData } = useGetPhotosQuery({ albumId });

  return (
    <div>
      Photo List:
      {photoData?.map(photo => (
        <div key={photo.id}>
          album ID: {photo.albumId}
          <Image src={photo.url} alt={photo.title} width={200} height={200} priority />
        </div>
      ))}
    </div>
  );
};

PhotoPage.displayName = 'PhotoPage';
