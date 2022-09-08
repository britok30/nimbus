import React from "react";
import "./HeadTableRow.css";

export const HeadTableRow = () => {
  return (
    <tr className="head-table-row">
      <th></th>
      <th>Name</th>
      <th>Device</th>
      <th>Path</th>
      <th>Status</th>
    </tr>
  );
};
