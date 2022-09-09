import React from "react";
import "./HeadTableRow.css";

export const HeadTableRow = () => {
  return (
    <tr data-testid="head-table-row" className="head-table-row">
      <th></th>
      <th>Name</th>
      <th>Device</th>
      <th>Path</th>
      <th
        style={{
          paddingLeft: "30px",
        }}
      >
        Status
      </th>
    </tr>
  );
};
