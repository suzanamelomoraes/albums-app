import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import axios from 'axios';
import Album from './Album';

jest.mock('axios');

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
      id: 1,
      albumId: 1,
      thumbnailUrl: 'https://via.placeholder.com/150/315aa6',
    },
    {
      id: 2,
      albumId: 1,
      thumbnailUrl: 'https://via.placeholder.com/150/1b9d08',
    },
    {
      id: 3,
      albumId: 1,
      thumbnailUrl: 'https://via.placeholder.com/150/6dd9cb',
    },
    {
      id: 4,
      albumId: 2,
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      id: 5,
      albumId: 2,
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      id: 6,
      albumId: 2,
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      id: 7,
      albumId: 3,
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 8,
      albumId: 3,
      thumbnailUrl: 'https://via.placeholder.com/150/1b9d08',
    },
    {
      id: 9,
      albumId: 3,
      thumbnailUrl: 'https://via.placeholder.com/150/6dd9cb',
    },
  ];

  const resp = { data: fakePhotosAlbumData };

  test('Should render a list of Albums titles if data is fetched', async () => {
    axios.get.mockResolvedValue(resp);

    render(<Album />);

    const listAlbumElement = screen.getByTestId('thumbnail-list');
    expect(listAlbumElement).toBeEmpty();

    await waitForElement(() =>
      screen.getAllByTestId('thumbnail-item').map((item) => item.context)
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(
      screen.getByText('https://via.placeholder.com/150/315aa6')
    ).toBeInTheDocument();
  });
});
