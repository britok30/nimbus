import React from "react";
import "./Header.css";

export const Header = ({ checkboxRef, checkedItems, handleSelectAll }) => {
  return (
    <div className="header">
      <input
        ref={checkboxRef}
        onClick={handleSelectAll}
        className="header__checkbox"
        type="checkbox"
      />
      <div className="header__details">
        <span className="header__selected">{`Selected ${checkedItems.length}`}</span>
        <button className="header__download-btn">Download selected</button>
      </div>
    </div>
  );
};
