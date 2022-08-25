import "../css/header.css";
import React from "react";

function Header({ title, titleMin, subtitle }) {
  return (
    <>
      <div className="headerMovieCard">
        <h1 id="hackTitle">{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </>
  );
}

export default Header;
