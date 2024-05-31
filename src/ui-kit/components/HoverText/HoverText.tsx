import React, { useState } from 'react';

import type { HoverTextProps } from './HoverText.props';

export const HoverText: React.FC<HoverTextProps> = props => {
  const { text, className } = props;
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="inline-block hover:cursor-pointer w-full"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <p className={`whitespace-nowrap text-ellipsis overflow-hidden ${className}`}>{text}</p>
      {isHover && (
        <div
          className={`absolute z-10 bottom-0 left-0 right-0 p-2 bg-white border border-gray-300 shadow-md rounded-sm whitespace-pre-line ${className}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

HoverText.displayName = 'HoverText';
