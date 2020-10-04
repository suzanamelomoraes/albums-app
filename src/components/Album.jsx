import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api/photos';
import Modal from './Modal';

const Album = () => {
  let { id } = useParams();
  let selectedAlbumId = Number(id);

  const [handlePhotoModal, setHandlePhotoModal] = useState({
    selectedIndex: '',
    modalOpen: false,
    photo: '',
  });

  const toggleModal = (selectedIndex, photoUrl) => {
    setHandlePhotoModal({
      modalOpen: true,
      selectedIndex,
      photo: photoUrl,
    });
  };

  const closePhotoModal = () =>
    setHandlePhotoModal({
      selectedIndex: '',
      modalOpen: false,
    });

  const [albumPhotos, setAlbumPhotos] = useState([]);

  useEffect(() => {
    const getPhotosByAlbumId = async () => {
      try {
        const res = await api.getPhotosByAlbumId(selectedAlbumId);
        const selectedAlbumDetails = res.data;
        setAlbumPhotos(selectedAlbumDetails);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPhotosByAlbumId();
  }, [selectedAlbumId]);

  return (
    <div className='album-photos'>
      <h3>Album photos:</h3>
      <div className='container'>
        <ul className='thumbnail-list' data-testid='thumbnail-list'>
          {albumPhotos.map((photo) => (
            <li
              className='thumbnail-item'
              key={photo.id}
              data-testid='thumbnail-item'
            >
              <img
                onClick={() => toggleModal(photo.id, photo.url)}
                src={photo.thumbnailUrl}
                alt='thumbnail'
              />

              {photo.thumbnailUrl}
            </li>
          ))}
        </ul>

        {handlePhotoModal.modalOpen && (
          <Modal
            closePhotoModal={closePhotoModal}
            show={handlePhotoModal.modalOpen}
            photo={handlePhotoModal.photo}
          />
        )}
      </div>
    </div>
  );
};

export default Album;
