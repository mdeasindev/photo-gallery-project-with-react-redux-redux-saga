import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-wrapper purple darken-4 nav-bar">
      <Link to="/" className="brand-logo center">
        <i className="material-icons">library_books</i>Gallery
      </Link>
    </nav>
  );
};

export default NavBar;
