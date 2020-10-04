import React, { useState, useEffect } from 'react';
import * as api from '../api/photos';

const Album = () => {
  const [albumPhotos, setAlbumPhotos] = useState([]);

  const albumIdLink = 1;

  useEffect(() => {
    const getPhotosByAlbumId = async () => {
      try {
        const res = await api.getPhotosByAlbumId();
        const array = res.data;
        console.log('array:', array);
        const photosByAlbumID = array.filter(
          (item) => item.albumId === albumIdLink
        );
        setAlbumPhotos(photosByAlbumID);
        console.log('photosByAlbumID:', photosByAlbumID);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPhotosByAlbumId();
  }, []);

  return (
    <div>
      <h1>Album:</h1>
      <ul data-testid='thumbnail-list'>
        {albumPhotos.map((photo) => (
          <li key={photo.id} data-testid='thumbnail-item'>
            {photo.thumbnailUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Album;
