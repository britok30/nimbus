import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { HeadTableRow } from "./components/HeadTableRow/HeadTableRow";
import { DataTableRow } from "./components/DataTableRow/DataTableRow";
import { data } from "./data";
import { Header } from "./components/Header/Header";

const App = () => {
  const checkboxRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);

    setCheckedItems(data.map((item) => item.name));
    if (isCheckAll) {
      setCheckedItems([]);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const { name, checked } = e.target as HTMLInputElement;
    setCheckedItems([...checkedItems, name]);

    if (!checked) {
      setCheckedItems(checkedItems.filter((item) => item !== name));
    }
  };

  useEffect(() => {
    if (!checkboxRef.current) return;

    if (checkedItems.length > 0 && !isCheckAll) {
      checkboxRef.current.indeterminate = true;
    } else {
      checkboxRef.current.indeterminate = false;
    }
  }, [checkedItems, isCheckAll]);

  return (
    <div className="main-outer">
      <div className="main-inner">
        <Header
          data={data}
          checkboxRef={checkboxRef}
          checkedItems={checkedItems}
          handleSelectAll={handleSelectAll}
        />

        <table>
          <colgroup>
            <col />
            <col span={2} />
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
                setCheckedItems={setCheckedItems}
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
