import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Album from './Album';

describe('Albums component works correctly', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render Album component', () => {
    const AlbumComponent = render(<Album />);
    expect(AlbumComponent).toBeTruthy();
  });

  const fakePhotosAlbumData = [
    {
      thumbnailUrl: 'https://via.placeholder.com/150/315aa6',
    },
    {
      thumbnailUrl: 'https://via.placeholder.com/150/1b9d08',
    },
    {
      thumbnailUrl: 'https://via.placeholder.com/150/6dd9cb',
    },
  ];

  const resp = { data: fakePhotosAlbumData };

  test('Should render a list of Albums titles if data is fetched', async () => {
    axios.get.mockResolvedValueOnce(resp);

    render(<Album />);

    const listAlbumElement = screen.getByTestId('albums-list');
    expect(listAlbumElement).toBeEmpty();
  });
});
