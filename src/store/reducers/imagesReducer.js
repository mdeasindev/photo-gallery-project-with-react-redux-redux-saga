import { IMAGES } from "../../constants";
const initState = {
  images: [],
  is_loaded: true,
  error: false,
  page: 1
};

const imagesReducer = (state = initState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return {
        ...initState
      };
    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        is_loaded: false,
        error: false,
        images: action.images,
        page: state.page + 1
      };
    case IMAGES.LOAD_FAILED:
      return {
        ...state,
        is_loaded: false,
        error: action.error[0]
      };
    default:
      return state;
  }
};

export default imagesReducer;
