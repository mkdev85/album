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
