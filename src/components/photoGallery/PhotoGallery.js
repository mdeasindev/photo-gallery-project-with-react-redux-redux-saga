import React, { useEffect } from "react";
import { connect } from "react-redux";
import PhotoList from "./PhotoList";
import { IMAGES } from "../../constants";
import LoadMoreBTN from "./LoadMoreBTN";

const PhotoGallery = props => {
  const { allImages, load, match, error } = props;
  const id = match.params.id ? Number(match.params.id) : 1;

  useEffect(() => {
    load(id);
  }, [id, load]);

  return (
    <div className="photo-gallery section center-align">
      <div className="container">
        <div className="row">
          {allImages.length ? (
            <React.Fragment>
              <PhotoList error={error} images={allImages} />
              <LoadMoreBTN id={id} />
            </React.Fragment>
          ) : error.length ? (
            <p className="red-text flow-text">{error}</p>
          ) : (
            <p className="flow-text">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allImages: state.images.images,
    page: state.images.page,
    error: state.images.error,
    is_loaded: state.images.is_loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMore: page => dispatch({ type: IMAGES.LOAD_MORE, page }),
    load: page => dispatch({ type: IMAGES.LOAD, page })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGallery);
