import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Renders <Modal /> component and its elements correctly', () => {
  test('Header component is rendering', () => {
    const ModalComponent = render(<Modal />);
    expect(ModalComponent).toBeTruthy();
  });

  test('Modal should render button', () => {
    render(<Modal />);
    expect(screen.getByRole('button', { name: /x/i }));
  });
});
