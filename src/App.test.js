import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/BNRY Image Slider Test/i);
  expect(linkElement).toBeInTheDocument();
});
