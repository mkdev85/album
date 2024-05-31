import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Header } from './Header';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/users',
    };
  },
}));

describe('Header Component', () => {
  it('renders a header element', () => {
    const { container } = render(<Header />);
    expect(container.firstElementChild?.tagName).toBe('HEADER');
  });

  it('reders "Alubm" title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Album')).toBeInTheDocument();
  });

  it('renders "Back to home" link as enabled when not on homepage', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText('Back to home');
    expect(linkElement).toHaveClass('opacity-50');
  });
});
