import React, { useContext } from "react";
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
    onRowClick,
    onCellClick,
  } = useTableProps();

  return (
    <>
      {dataList.map((item, index) => {
        return (
          <div
            className={`rpt__row
              ${bordered ? "bordered" : ""}
              ${selectable ? "selectable" : ""}
              ${hoverable ? "hoverable" : ""}
              ${striped ? "striped" : ""}
              ${isSelected(item) ? "selected" : ""}`}
            key={index}
            onClick={() => {
              onRowClick && onRowClick(selectedRows, index);
            }}
          >
            {selectable && (
              <div className="rpt__column rpt_checkbox_column">
                <Checkbox
                  item={item}
                  onClick={() => {
                    handleRowClick(item, index);
                  }}
                />
              </div>
            )}
            {headers.map(
              (header, index) =>
                isColumnVisible(header) && (
                  <div
                    className="rpt__column rpt_table_cell bordered"
                    key={index}
                    onClick={() => {
                      onCellClick &&
                        onCellClick(header.accessor, header.title, item);
                    }}
                  >
                    {header.render(item)}
                  </div>
                )
            )}
          </div>
          /* <div className="w-100">
            {dataList.map((item) => (
              <div className="w-100">
                {headers.map(
                  (header, index) =>
                    isColumnVisible(header) && (
                      <div
                        className="d-flex justify-content-between"
                        key={index}
                        onClick={() => {
                          onCellClick &&
                            onCellClick(header.accessor, header.title, item);
                        }}
                      >
                        {header.title}
                        {header.render(item)}
                      </div>
                    )
                )}
              </div>
            ))}
          </div> */
        );
      })}
    </>
  );
};

export default TableBody;
