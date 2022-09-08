import React from "react";
import "./App.css";
import { HeadTableRow } from "./components/HeadTableRow/HeadTableRow";
import { DataTableRow } from "./components/DataTableRow/DataTableRow";
import { data } from "./data";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <div className="main-outer">
      <div className="main-inner">
        <Header />

        <table>
          <colgroup>
            <col />
            <col span="2" />
            <col width="40%" />
            <col />
          </colgroup>
          <HeadTableRow />

          {data.map((item, index) => (
            <DataTableRow item={item} index={index} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default App;
