import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMAGE_DETAILS } from "../../constants";

const PhotoDetails = props => {
  const { photo_id } = props.match.params;
  const { image, error, load } = props;

  useEffect(() => {
    load(photo_id);
  }, [load, photo_id]);

  return (
    <div className="photo-details section">
      <div className="container">
        {Object.keys(image).length ? (
          <div className="card">
            <div className="card-image">
              <img src={image.urls.regular} alt={image.description} />
            </div>
          </div>
        ) : error.length ? (
          <p className="flow-text red-text">{error}</p>
        ) : (
          <p className="flow-text">Loading...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    image: state.singleImage.image,
    error: state.singleImage.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: id => {
      dispatch({ type: IMAGE_DETAILS.LOAD, id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetails);
