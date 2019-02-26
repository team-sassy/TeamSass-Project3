import React from "react";
import "./style.css";
import { withRouter } from "react-router-dom";

function Footer({location}) {
  const footerStyle = (location.pathname === "/") ? {position: "relative"} : {};
  return (
    <footer className="footer bg-dark-purple" style={footerStyle}>
    <h6> &copy; Copyright Team-Sass 2019</h6>
    </footer>
  );
}

export default withRouter(Footer);