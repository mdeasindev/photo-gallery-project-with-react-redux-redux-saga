import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { IMAGES, IMAGE_DETAILS } from "../../constants";
import { setImages, setError } from "../actions/imagesActions";
import { setImage, setImageError } from "../actions/imageDetailsAction";
import { getPhotos, getPhotoById } from "../../api";

function* fetchImages(action) {
  const photos = yield call(getPhotos, action.page);
  if (photos.errors) {
    yield put(setError(photos.errors));
  } else {
    yield put(setImages(photos));
  }
}

function* fetchImage(action) {
  const photo = yield call(getPhotoById, action.id);
  if (photo.errors) {
    yield put(setImageError(photo.errors));
  } else {
    yield put(setImage(photo));
  }
}

function* mySaga() {
  yield takeEvery(IMAGES.LOAD, fetchImages);
  yield takeLatest(IMAGE_DETAILS.LOAD, fetchImage);
}

export default mySaga;
