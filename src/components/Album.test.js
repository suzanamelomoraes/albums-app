import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElement } from '@testing-library/react';
import * as api from '../api/photos';
import Album from './Album';

const mockPhotosAlbumData = [
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

jest.mock('../api/photos', () => {
  return {
    getPhotosByAlbumId: jest.fn(),
  };
});

describe('Albums component works correctly', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render Album component', () => {
    const AlbumComponent = render(
      <MemoryRouter initialEntries={['/photos/1']}>
        <Route path='/photos/:id'>
          <Album />
        </Route>
      </MemoryRouter>
    );
    expect(AlbumComponent).toBeTruthy();
  });

  test('Should render a list of Album photos if data is fetched', async () => {
    // jest.mock('react-router-dom', () => ({
    //   ...jest.requireActual('react-router-dom'),
    //   useParams: () => ({ id: 1 }),
    // }));

    api.getPhotosByAlbumId.mockImplementation(() => {
      return Promise.resolve({
        data: mockPhotosAlbumData.filter((album) => album.albumId === 1),
      });
    });

    render(
      <MemoryRouter initialEntries={['/photos/1']}>
        <Route path='/photos/:id'>
          <Album />
        </Route>
      </MemoryRouter>
    );

    expect(jest.isMockFunction(MemoryRouter)).toBe(false);

    const listAlbumElement = screen.getByTestId('thumbnail-list');
    expect(listAlbumElement).toBeEmpty();

    await waitForElement(() =>
      screen.getAllByTestId('thumbnail-item').map((item) => item.context)
    );

    expect(api.getPhotosByAlbumId).toHaveBeenCalledTimes(1);
    expect(
      screen.getByText('https://via.placeholder.com/150/315aa6')
    ).toBeInTheDocument();
  });
});
