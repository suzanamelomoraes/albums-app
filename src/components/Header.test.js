import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Renders <Header /> component and its elements correctly', () => {
  test('Header component is rendering and navigating', () => {
    const HeaderComponent = render(<Header />, { wrapper: MemoryRouter });
    expect(HeaderComponent).toBeTruthy();
  });

  test('Header should render Title', () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
