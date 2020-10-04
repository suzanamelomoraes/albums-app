import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api/photos';

const Album = () => {
  let { id } = useParams();
  let selectedAlbumId = Number(id);

  const [albumPhotos, setAlbumPhotos] = useState([]);

  useEffect(() => {
    const getPhotosByAlbumId = async () => {
      try {
        const res = await api.getPhotosByAlbumId(selectedAlbumId);
        const selectedAlbumDetails = res.data;
        console.log('selectedAlbumDetails: --->', selectedAlbumDetails);
        setAlbumPhotos(selectedAlbumDetails);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPhotosByAlbumId();
  }, [selectedAlbumId]);

  return (
    <div>
      <h3>Album photos:</h3>
      <div>
        <ul data-testid='thumbnail-list'>
          {albumPhotos.map((photo) => (
            <li key={photo.id} data-testid='thumbnail-item'>
              <img src={photo.thumbnailUrl} alt='thumbnail' />
              {photo.thumbnailUrl}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Album;
