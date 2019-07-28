import React from "react";
import { Link } from "react-router-dom";

const LoadMoreBTN = props => {
  const { id, loadMore } = props;
  return (
    <div className="load-more section">
      <Link
        onClick={loadMore}
        to={`/page/${id + 1}`}
        className="btn pink darken-3"
      >
        Load page {id + 1}
      </Link>
    </div>
  );
};

export default LoadMoreBTN;
