import React from "react";
import { Data } from "../../types";
import { capitalize } from "../../utils";
import "./DataTableRow.css";

export const DataTableRow = ({
  item,
  index,
  checkedItems,
  handleClick,
}: {
  item: Data;
  index: number;
  checkedItems: string[];
  handleClick: (e: React.MouseEvent) => void;
}) => {
  const { name, device, path, status } = item;
  return (
    <tr
      className="data-table-row"
      key={index}
      style={{
        backgroundColor: checkedItems.includes(name) ? "#d8d8d8" : "",
      }}
    >
      <td>
        <input
          className="data-table-row__checkbox"
          type="checkbox"
          name={name}
          onClick={handleClick}
          checked={checkedItems.includes(name)}
        />
      </td>
      <td>{name}</td>
      <td>{device}</td>
      <td>{path}</td>
      <td
        style={{
          display: "flex",
        }}
      >
        <div
          className="data-table-cell__status-circle"
          style={{
            visibility: status !== "available" ? "hidden" : "visible",
          }}
        ></div>

        {capitalize(status)}
      </td>
    </tr>
  );
};
