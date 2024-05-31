import React from 'react';

import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import { UserCard } from './UserCard';

describe('UserCard Component', () => {
  const userData = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  const onClick = jest.fn();

  it('renders user card with correct data', () => {
    const { getByText, getByAltText } = render(<UserCard userData={userData} onClick={onClick} />);

    expect(getByText('Leanne Graham')).toBeInTheDocument();
    expect(getByText('Sincere@april.biz | Company: Romaguera-Crona')).toBeInTheDocument();
    expect(getByText('ID: 1')).toBeInTheDocument();
    expect(getByAltText('Leanne Graham')).toBeInTheDocument();
  });

  it('executes onClick function when user card is clicked', () => {
    const { container } = render(<UserCard userData={userData} onClick={onClick} />);
    fireEvent.click(container.firstChild as Element);
    expect(onClick).toHaveBeenCalled();
  });
});
