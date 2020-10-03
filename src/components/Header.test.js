import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component displays Title and Link to home', () => {
  test('Should render Header component', () => {
    const HeaderComponent = render(<Header />);
    expect(HeaderComponent).toBeTruthy();
  });

  test('App should render Title', () => {
    render(<Header />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
