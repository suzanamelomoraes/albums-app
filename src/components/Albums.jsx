import React, { useState, useEffect } from 'react';
import * as api from '../api/albums';

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
      <h1>Albums</h1>
      <ul data-testid='albums-list'></ul>
      {albums.map((album) => (
        <li key={album.id} className='albums-item' data-testid='album-item'>
          {album.title}
        </li>
      ))}
    </div>
  );
};

export default Albums;
