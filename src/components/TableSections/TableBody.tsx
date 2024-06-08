import React, { useContext } from "react";
import { TableContextProps } from "../../type/types";
import Checkbox from "../SharedComponents/Checkbox";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const TableBody = () => {
  const {
    hoverable,
    selectable,
    striped,
    dataList,
    headers,
    bordered,
    selectedRows,
    handleRowClick,
    isSelected,
    isColumnVisible,
    visibleColumns,
  } = useTableProps();

  return (
    <>
      {dataList.map((item, index) => {
        return (
          <div
            className={`table__row ${bordered ? "bordered" : ""} ${
              selectable ? "selectable" : ""
            } ${hoverable ? "hoverable" : ""} ${striped ? "striped" : ""} ${
              isSelected(item) ? "selected" : ""
            }`}
            key={index}
            onClick={() => {
              handleRowClick(item, index)
            }}
          >
            {selectable && (
              <div className="table__column">
                <Checkbox item={item} />
              </div>
            )}
            {headers.map(
              (header, index) =>
                isColumnVisible(header) && (
                  <div className="table__column" key={index}>
                    {header.render(item)}
                  </div>
                )
            )}
          </div>
        );
      })}
    </>
  );
};

export default TableBody;
