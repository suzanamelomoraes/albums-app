import React from 'react';
import { render } from '@testing-library/react';
import Albums from './Albums';

describe('Albums component works correctly', () => {
  test('Should render Albums component', () => {
    const AlbumsComponent = render(<Albums />);
    expect(AlbumsComponent).toBeTruthy();
  });
});
