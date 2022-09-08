import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <input className="header__checkbox" type="checkbox" />
      <div className="header__details">
        <span className="header__selected">Selected 2</span>
        <button className="header__download-btn">Download selected</button>
      </div>
    </div>
  );
};
