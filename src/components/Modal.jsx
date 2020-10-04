import React from 'react';

function Modal(props) {
  const { show, closePhotoModal, photo } = props;

  return (
    <div>
      <div className={show ? 'overlay' : 'hide'} onClick={closePhotoModal} />
      <div className={show ? 'modal' : 'hide'}>
        <button onClick={closePhotoModal}>X</button>
        <img className='modal-content' src={photo} alt='option selected' />
      </div>
    </div>
  );
}

export default Modal;
