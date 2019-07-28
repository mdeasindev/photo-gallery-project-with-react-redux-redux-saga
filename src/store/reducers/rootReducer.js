import imagesReducer from "./imagesReducer";
import imageDetailsReducer from "./imageDetailsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  images: imagesReducer,
  singleImage: imageDetailsReducer
});

export default rootReducer;
