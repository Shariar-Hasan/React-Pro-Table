import React, { useEffect, useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const Checkbox = ({ item, checkAll }: { item?: any; checkAll?: boolean }) => {
  const { dataList, selectedRows, handleSelectAllRow, uniqueKeyAccessor } =
    useTableProps();
  const [isChecked, setIsChecked] = useState<boolean>();
  useEffect(() => {
    const newIsChecked =
      (item &&
        selectedRows
          .map((r) => r[uniqueKeyAccessor as string])
          .includes(item[uniqueKeyAccessor as string])) ||
      (selectedRows.length >= dataList.length && dataList.length > 0);
    setIsChecked(newIsChecked);
  }, [selectedRows]);
  return (
    <span
      className={`table__checkbox ${isChecked ? "checked" : ""}`}
      onClick={() => {
        console.log({ checkAll });
        checkAll
          ? handleSelectAllRow()
          : () => {
              return;
            };
      }}
    ></span>
    // <input
    //   type="checkbox"
    //   style={{
    //     width: "15px",
    //     height: "15px",
    //   }}
    //   readOnly
    //   checked={selectedRows?.includes(item)}
    // />
  );
};

export default Checkbox;
