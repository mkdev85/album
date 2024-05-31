import React from 'react';

import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import { Card } from './Card';

describe('Card Component', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
    onClick: jest.fn(),
  };

  it('renders card correctly with title and description', () => {
    const { getByText } = render(<Card {...mockProps} />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('executes onClick function when card is clicked', () => {
    const { getByText } = render(<Card {...mockProps} />);
    fireEvent.click(getByText('Test Title'));
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
