import React from "react";
import { Data } from "../../types";
import { ghostDownload } from "../../utils";
import "./Header.css";

export const Header = ({
  data,
  checkboxRef,
  checkedItems,
  handleSelectAll,
}: {
  data: Data[];
  checkboxRef: React.Ref<HTMLInputElement>;
  checkedItems: string[];
  handleSelectAll: () => void;
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

    // If we have selected items, we show the alert
    if (selected.length > 0) {
      alertMessage(selected);
    }

    // // Trigger download only for available status
    selected.forEach((item) => {
      if (item.status === "available") {
        ghostDownload(item.name, item.path);
      }
    });
  };

  const alertMessage = (arr: Data[]) => {
    const device = arr.map((item) => item.device).join("\n");
    const path = arr.map((item) => item.path).join("\n");

    alert(`Device(s):\n${device}\n\nPath(s):\n${path}`);
  };

  return (
    <div className="header">
      <input
        data-testid="select-all-checkbox"
        aria-label="select-all-checkbox"
        ref={checkboxRef}
        onClick={handleSelectAll}
        className="header__checkbox"
        type="checkbox"
      />
      <div className="header__details">
        <span className="header__text">{handleCountText()}</span>
        <button
          aria-label="download"
          onClick={handleDownloadClick}
          className="header__download-btn"
        >
          Download selected
        </button>
      </div>
    </div>
  );
};
