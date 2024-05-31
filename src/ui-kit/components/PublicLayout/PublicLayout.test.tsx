import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { PublicLayout } from './PublicLayout';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
    };
  },
}));

describe('PublicLayout Component', () => {
  it('renders children wrapped within a layout structure containing a Header component', () => {
    const { getByText } = render(
      <PublicLayout>
        <div>Test Content</div>
      </PublicLayout>,
    );

    expect(getByText('Album')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
