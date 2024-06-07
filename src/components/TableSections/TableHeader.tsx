import React, { useContext } from "react";
import { ITableProps, TableContextProps } from "../../type/types";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import Checkbox from "../SharedComponents/Checkbox";

const TableHeader = () => {
  const {
    headers,
    bordered,
    stickyHeader,
    striped,
    selectable,
    selectAll,
    visibleColumns,
    isColumnVisible,
  } = useTableProps();
  return (
    <div
      className={`table__header table__row ${bordered ? "bordered" : ""} ${
        stickyHeader ? "sticky" : ""
      } ${striped ? "striped" : ""}`}
    >
      {selectable && (
        <div className="table__column">
          {selectAll && <Checkbox checkAll />}
        </div>
      )}
      {headers.map(
        (header, index) =>
          isColumnVisible(header) && (
            <div className="table__column" key={index}>
              {header.title}
            </div>
          )
      )}
    </div>
  );
};

export default TableHeader;
