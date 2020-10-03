import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Albums from './Albums';

describe('Albums component works correctly', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render Albums component', () => {
    const AlbumsComponent = render(<Albums />);
    expect(AlbumsComponent).toBeTruthy();
  });

  const fakeAlbumsData = [
    {
      title: 'Fake album 1',
    },
    {
      title: 'Fake album 2',
    },
    {
      title: 'Fake album 3',
    },
  ];

  const resp = { data: fakeAlbumsData };

  test('Should render a list of Albums titles if data is fetched', async () => {
    axios.get.mockResolvedValueOnce(resp);

    render(<Albums />);

    const listAlbumElement = screen.getByTestId('albums-list');
    expect(listAlbumElement).toBeEmpty();
  });
});
