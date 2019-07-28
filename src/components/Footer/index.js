import React from "react";

const Footer = () => {
  return (
    <footer className="section grey lighten-3">
      <div className="container">
        <p style={{ display: "inline-block", marginRight: "10px" }}>
          Developed by{" "}
          <a href="http://mdeasin.com/" className="btn pink darken-3">
            <strong>Md Easin</strong>
          </a>
        </p>
        <a
          href="https://github.com/mdeasindev/photo-gallery-project-with-react-redux-redux-saga"
          className="btn pink darken-3 right-align"
          style={{ display: "inline-block" }}
        >
          <strong>Github</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
