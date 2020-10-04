import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as api from '../api/albums';
import Header from './Header';
import Album from './Album';

const Albums = () => {
  const [albums, setAlbumns] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const res = await api.getAlbums();
        setAlbumns(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getAlbums();
  }, []);

  return (
    <div className='flex-container'>
      <Header />
      <div className='albums'>
        <div>
          <Route path='/'>
            <ul className='albums-list' data-testid='albums-list'>
              {albums.map((album) => (
                <li key={album.id} data-testid='album-item'>
                  <Link className='albums-item' to={`/photos/${album.id}`}>
                    {album.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Route>
        </div>
        <div>
          <Route path='/photos/:id'>
            <Album />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Albums;
