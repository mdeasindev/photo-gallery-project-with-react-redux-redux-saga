import React from "react";
import Photo from "./Photo";

const PhotoList = props => {
  const { images } = props;
  return (
    <div className="secton photo-lis">
      {images.length ? (
        images.map(image => <Photo key={image.id} image={image} />)
      ) : (
        <p class="no-image-found">No images found!</p>
      )}
    </div>
  );
};

export default PhotoList;
