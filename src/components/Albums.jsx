import React, { useState, useEffect } from 'react';
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
    <div>
      <Header />
      <div>
        <ul data-testid='albums-list'></ul>
        {albums.map((album) => (
          <li key={album.id} className='albums-item' data-testid='album-item'>
            {album.title}
          </li>
        ))}
      </div>
      <Album />
    </div>
  );
};

export default Albums;
