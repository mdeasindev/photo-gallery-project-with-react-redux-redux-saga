import { CLIENT_ID } from "../config";

export const getPhotos = async (page = 1) => {
  const url = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getPhotoById = async id => {
  const url = `https://api.unsplash.com/photos/${id}/?client_id=${CLIENT_ID}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
