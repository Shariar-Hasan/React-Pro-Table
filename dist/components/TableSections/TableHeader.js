import React from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import Checkbox from "../SharedComponents/Checkbox";
var TableHeader = function () {
    var _a = useTableProps(), headers = _a.headers, bordered = _a.bordered, stickyHeader = _a.stickyHeader, striped = _a.striped, selectable = _a.selectable, selectAll = _a.selectAll, visibleColumns = _a.visibleColumns, isColumnVisible = _a.isColumnVisible;
    return (React.createElement("div", { className: "table__header table__row ".concat(bordered ? "bordered" : "", " ").concat(stickyHeader ? "sticky" : "", " ").concat(striped ? "striped" : "") },
        selectable && (React.createElement("div", { className: "table__column" }, selectAll && React.createElement(Checkbox, { checkAll: true }))),
        headers.map(function (header, index) {
            return isColumnVisible(header) && (React.createElement("div", { className: "table__column", key: index }, header.title));
        })));
};
export default TableHeader;
