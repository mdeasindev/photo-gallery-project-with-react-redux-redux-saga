import { IMAGE_DETAILS } from "../../constants";
const initState = {
  image: {},
  is_loaded: true,
  error: false
};

const imageDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case IMAGE_DETAILS.LOAD:
      return {
        ...initState
      };
    case IMAGE_DETAILS.LOAD_SUCCESS:
      return {
        ...state,
        is_loaded: false,
        error: false,
        image: action.image
      };
    case IMAGE_DETAILS.LOAD_FAILED:
      return {
        ...state,
        is_loaded: false,
        error: action.error[0]
      };
    default:
      return state;
  }
};

export default imageDetailsReducer;
