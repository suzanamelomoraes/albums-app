import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
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

  test('Should render Header component', () => {
    render(<Albums />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
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
    console.log('resp:', resp);

    render(<Albums />);

    const listAlbumElement = screen.getByTestId('albums-list');
    expect(listAlbumElement).toBeEmpty();

    await waitForElement(() =>
      screen.getAllByTestId('album-item').map((item) => item.context)
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Fake album 1')).toBeInTheDocument();
  });
});
