import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com';

export const getPhotosByAlbumId = async (selectedAlbumId) => {
  return await axios.get(`${url}/albums/${selectedAlbumId}/photos`);
};
