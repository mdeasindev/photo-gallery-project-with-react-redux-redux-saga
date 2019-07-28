import { IMAGE_DETAILS } from "../../constants";

const imageLoad = () => {
  return {
    type: IMAGE_DETAILS.LOAD
  };
};

const setImage = image => {
  return {
    type: IMAGE_DETAILS.LOAD_SUCCESS,
    image
  };
};

const setImageError = error => {
  return {
    type: IMAGE_DETAILS.LOAD_FAILED,
    error
  };
};

export { imageLoad, setImage, setImageError };
