import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com';

export const getAlbums = async () => {
  return await axios.get(`${url}/albums`);
};

export const getPhotosByAlbumId = async () => {
  return await axios.get(`${url}/photos`);
};
