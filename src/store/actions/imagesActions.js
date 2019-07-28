import { IMAGES } from "../../constants";

const imagesLoad = () => {
  return {
    type: IMAGES.LOAD
  };
};

const setImages = images => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    images
  };
};

const setError = error => {
  return {
    type: IMAGES.LOAD_FAILED,
    error
  };
};

export { imagesLoad, setImages, setError };
