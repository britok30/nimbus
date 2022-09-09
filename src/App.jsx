import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { HeadTableRow } from "./components/HeadTableRow/HeadTableRow";
import { DataTableRow } from "./components/DataTableRow/DataTableRow";
import { data } from "./data";
import { Header } from "./components/Header/Header";

const App = () => {
  const selectAllCheckboxRef = useRef();
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

  useEffect(() => {
    if (!selectAllCheckboxRef.current) return;

    if (checkedItems.length > 0 && !isCheckAll) {
      selectAllCheckboxRef.current.indeterminate = true;
    } else {
      selectAllCheckboxRef.current.indeterminate = false;
    }
  }, [checkedItems, isCheckAll]);

  return (
    <div className="main-outer">
      <div className="main-inner">
        <Header
          checkboxRef={selectAllCheckboxRef}
          checkedItems={checkedItems}
          handleSelectAll={handleSelectAll}
        />

        <table>
          <colgroup>
            <col />
            <col span="2" />
            <col width="40%" />
            <col />
          </colgroup>
          <thead>
            <HeadTableRow />
          </thead>

          <tbody>
            {data.map((item, index) => (
              <DataTableRow
                key={index}
                item={item}
                index={index}
                checkedItems={checkedItems}
                handleClick={handleClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
