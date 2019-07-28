import React from "react";
import { Link } from "react-router-dom";

const Photo = props => {
  const { image } = props;
  return (
    <Link to={`/photo/${image.id}`}>
      <div className="photo card z-depth-0">
        <div className="card-image">
          <img src={image.urls.small} alt={image.alt_description} />
          <span className="card-title">{image.user.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default Photo;
