import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs Component', () => {
  const items = [
    { title: 'Home', onClick: jest.fn() },
    { title: 'Catalog', onClick: jest.fn() },
    { title: 'Product', onClick: jest.fn() },
    { title: 'Details', onClick: jest.fn(), disabled: true },
  ];

  it('renders breadcrumbs correctly', () => {
    const { getByText } = render(<Breadcrumbs items={items} />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Catalog')).toBeInTheDocument();
    expect(getByText('Product')).toBeInTheDocument();
    expect(getByText('Details')).toBeInTheDocument();
  });

  it('disables items', () => {
    const { getByText } = render(<Breadcrumbs items={items} />);
    const productElement = getByText('Details');

    expect(productElement.parentElement).toHaveClass('pointer-events-none');
  });
});
