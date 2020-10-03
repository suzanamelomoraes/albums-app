import React from 'react';
import { render } from '@testing-library/react';
import Album from './Album';

describe('Albums component works correctly', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render Album component', () => {
    const AlbumComponent = render(<Album />);
    expect(AlbumComponent).toBeTruthy();
  });
});
