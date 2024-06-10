import React from "react";
import Checkbox from "../SharedComponents/Checkbox";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var TableBody = function () {
    var _a = useTableProps(), hoverable = _a.hoverable, selectable = _a.selectable, striped = _a.striped, dataList = _a.dataList, headers = _a.headers, bordered = _a.bordered, selectedRows = _a.selectedRows, handleRowClick = _a.handleRowClick, isSelected = _a.isSelected, isColumnVisible = _a.isColumnVisible, visibleColumns = _a.visibleColumns;
    return (React.createElement(React.Fragment, null, dataList.map(function (item, index) {
        return (React.createElement("div", { className: "rpt__row ".concat(bordered ? "bordered" : "", " ").concat(selectable ? "selectable" : "", " ").concat(hoverable ? "hoverable" : "", " ").concat(striped ? "striped" : "", " ").concat(isSelected(item) ? "selected" : ""), key: index, onClick: function () {
                handleRowClick(item, index);
            } },
            selectable && (React.createElement("div", { className: "rpt__column" },
                React.createElement(Checkbox, { item: item }))),
            headers.map(function (header, index) {
                return isColumnVisible(header) && (React.createElement("div", { className: "rpt__column bordered", key: index }, header.render(item)));
            })));
    })));
};
export default TableBody;
