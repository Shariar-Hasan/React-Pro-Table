import React, { useEffect, useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import { DatalistSingleItemType } from "../../type/types";

const Checkbox = ({
  item,
  checkAll,
  onClick,
}: {
  item?: any;
  checkAll?: boolean;
  onClick?: () => void;
}) => {
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
      className={`rpt__checkbox ${isChecked ? "checked" : ""}`}
      onClick={() => {
        checkAll ? handleSelectAllRow() : onClick && onClick();
      }}
    ></span>
  );
};

export default Checkbox;
