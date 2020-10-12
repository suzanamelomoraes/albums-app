import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../api/albums';
import Albums from './Albums';

const mockAlbumsData = [
  { id: 1, title: 'Fake album 1' },
  { id: 2, title: 'Fake album 2' },
  { id: 3, title: 'Fake album 3' },
];

jest.mock('../api/albums', () => {
  return {
    getAlbums: jest.fn(() =>
      Promise.resolve({
        data: mockAlbumsData,
      })
    ),
  };
});

describe('Albums component works correctly', () => {
  //   afterEach(() => {
  //     jest.clearAllMocks();
  //   });

  test('Should render Albums component', () => {
    const AlbumsComponent = render(<Albums />, { wrapper: MemoryRouter });
    expect(AlbumsComponent).toBeTruthy();
  });

  test('Should render Header component', () => {
    render(<Albums />, { wrapper: MemoryRouter });
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test('Should render a list of Albums titles if data is fetched', async () => {
    render(<Albums />, { wrapper: MemoryRouter });

    const listAlbumElement = screen.getByTestId('albums-list');
    expect(listAlbumElement).toBeEmpty();

    await waitForElement(() => screen.getAllByTestId('album-item'));

    expect(screen.getByText('Fake album 1')).toBeInTheDocument();
  });
});
