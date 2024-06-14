import React from "react";
import Checkbox from "../SharedComponents/Checkbox";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var TableBody = function () {
    var _a = useTableProps(), hoverable = _a.hoverable, selectable = _a.selectable, striped = _a.striped, dataList = _a.dataList, headers = _a.headers, bordered = _a.bordered, selectedRows = _a.selectedRows, handleRowClick = _a.handleRowClick, isSelected = _a.isSelected, isColumnVisible = _a.isColumnVisible, visibleColumns = _a.visibleColumns, onRowClick = _a.onRowClick, onCellClick = _a.onCellClick;
    return (React.createElement(React.Fragment, null, dataList.map(function (item, index) {
        return (React.createElement("div", { className: "rpt__row\n              ".concat(bordered ? "bordered" : "", "\n              ").concat(selectable ? "selectable" : "", "\n              ").concat(hoverable ? "hoverable" : "", "\n              ").concat(striped ? "striped" : "", "\n              ").concat(isSelected(item) ? "selected" : ""), key: index, onClick: function () {
                onRowClick && onRowClick(selectedRows, index);
            } },
            selectable && (React.createElement("div", { className: "rpt__column rpt_checkbox_column" },
                React.createElement(Checkbox, { item: item, onClick: function () {
                        handleRowClick(item, index);
                    } }))),
            headers.map(function (header, index) {
                return isColumnVisible(header) && (React.createElement("div", { className: "rpt__column rpt_table_cell bordered", key: index, onClick: function () {
                        onCellClick &&
                            onCellClick(header.accessor, header.title, item);
                    } }, header.render(item)));
            }))
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
    })));
};
export default TableBody;
