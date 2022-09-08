import React, { useState } from "react";
import { capitalize } from "../../utils";
import "./DataTableRow.css";

export const DataTableRow = ({ item, index }) => {
  const [checked, setChecked] = useState(false);
  return (
    <tr
      className="data-table-row"
      key={index}
      onClick={() => setChecked(!checked)}
    >
      <td>
        <input
          className="data-table-row__checkbox"
          onClick={() => setChecked(!checked)}
          type="checkbox"
          checked={checked}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.device}</td>
      <td>{item.path}</td>
      <td
        style={{
          display: "flex",
        }}
      >
        <div
          className="data-table-cell__status-circle"
          style={{
            visibility: item.status !== "available" ? "hidden" : "visible",
          }}
        ></div>

        {capitalize(item.status)}
      </td>
    </tr>
  );
};
