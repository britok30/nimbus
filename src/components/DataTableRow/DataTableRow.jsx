import React, { useState } from "react";
import { capitalize } from "../../utils";
import "./DataTableRow.css";

export const DataTableRow = ({ item, index }) => {
  const [selected, setSelected] = useState(false);
  return (
    <tr className="data-table-row" key={index}>
      <td>
        <input
          onClick={() => setSelected(!selected)}
          type="checkbox"
          checked={selected}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.device}</td>
      <td>{item.path}</td>
      <td>{capitalize(item.status)}</td>
    </tr>
  );
};
