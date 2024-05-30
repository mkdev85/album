import React from 'react';

import Image from 'next/image';

import type { UserCardProps } from './UserCard.props';

export const UserCard: React.FC<UserCardProps> = props => {
  const { userData, onClick } = props;

  return (
    <div
      className="p-3 sm:p-4 bg-slate-100 hover:bg-slate-200 cursor-pointer mb-4 lg:mb-0"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            src="/images/profile-picture.jpg"
            width={32}
            height={32}
            alt={userData.name}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{userData.name}</p>
          <p className="text-sm text-gray-500">
            {userData.email} | Company: {userData.company.name}
          </p>
        </div>
        <div className="inline-flex items-center text-sm text-gray-400">ID: {userData.id}</div>
      </div>
    </div>
  );
};

UserCard.displayName = 'UserCard';
