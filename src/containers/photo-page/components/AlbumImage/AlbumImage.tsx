import React, { useState } from 'react';

import Image from 'next/image';

import type { AlbumImageProps } from './AlbumImage.props';

export const AlbumImage: React.FC<AlbumImageProps> = props => {
  const { src, alt, priority = false } = props;
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/images/Image-not-available.png');
  };

  return (
    <div className="relative w-full h-64">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 25vw, 20vw"
        priority={priority}
        placeholder="blur"
        className="rounded-t-lg"
        blurDataURL="/images/image-placeholder.gif"
        onError={handleError}
      />
    </div>
  );
};

AlbumImage.displayName = 'AlbumImage';
