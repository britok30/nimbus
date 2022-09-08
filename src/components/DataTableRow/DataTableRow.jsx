import React from "react";
import "./DataTableRow.css";

export const DataTableRow = ({ item, index }) => {
  return (
    <tr className="data-table-row" key={index}>
      <td>
        <input type="checkbox" />
      </td>
      <td>{item.name}</td>
      <td>{item.device}</td>
      <td>{item.path}</td>
      <td>{item.status}</td>
    </tr>
  );
};
