import React from "react";
import "./Header.css";

export const Header = ({
  data,
  checkboxRef,
  checkedItems,
  handleSelectAll,
}) => {
  const handleCountText = () => {
    if (checkedItems.length > 0) {
      return `Selected ${checkedItems.length}`;
    } else {
      return "None Selected";
    }
  };

  const handleDownloadClick = () => {
    const selected = data.filter((item, index) => {
      if (checkedItems.includes(item.name)) {
        return item;
      }

      return false;
    });

    // Trigger download only for available status
    selected.forEach((item) => {
      if (item.status === "available") {
        downloadFile(item.path);
      }
    });
  };

  const downloadFile = (file) => {
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(file);
    link.download = file.name;

    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="header">
      <input
        ref={checkboxRef}
        onClick={handleSelectAll}
        className="header__checkbox"
        type="checkbox"
      />
      <div className="header__details">
        <span className="header__text">{handleCountText()}</span>
        <button onClick={handleDownloadClick} className="header__download-btn">
          Download selected
        </button>
      </div>
    </div>
  );
};
