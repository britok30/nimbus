import React, { useState } from "react";
import "./App.css";
import { HeadTableRow } from "./components/HeadTableRow/HeadTableRow";
import { DataTableRow } from "./components/DataTableRow/DataTableRow";
import { data } from "./data";
import { Header } from "./components/Header/Header";

const App = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);

    setCheckedItems(data.map((item) => item.name));
    if (isCheckAll) {
      setCheckedItems([]);
    }
  };

  const handleClick = (e) => {
    const { name, checked } = e.target;
    setCheckedItems([...checkedItems, name]);

    if (!checked) {
      setCheckedItems(checkedItems.filter((item) => item !== name));
    }
  };

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
            <DataTableRow
              item={item}
              index={index}
              checkedItems={checkedItems}
              handleClick={handleClick}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default App;
