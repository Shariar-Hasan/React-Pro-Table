import React, { useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import Checkbox from "../SharedComponents/Checkbox";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
var TableHeader = function () {
    var _a = useTableProps(), headers = _a.headers, bordered = _a.bordered, stickyHeader = _a.stickyHeader, striped = _a.striped, selectable = _a.selectable, selectAll = _a.selectAll, visibleColumns = _a.visibleColumns, onSort = _a.onSort, isColumnVisible = _a.isColumnVisible;
    var _b = useState({
        order: "",
        orderBy: "",
    }), sortProps = _b[0], setSortProps = _b[1];
    var handleSort = function (name) {
        if (sortProps.order === "desc") {
            setSortProps({ order: "asc", orderBy: name });
            onSort && onSort("asc", name);
        }
        else {
            setSortProps({ order: "desc", orderBy: name });
            onSort && onSort("desc", name);
        }
    };
    return (React.createElement("div", { className: "table__header table__row ".concat(bordered ? "bordered" : "", " ").concat(stickyHeader ? "sticky" : "", " ").concat(striped ? "striped" : "") },
        selectable && (React.createElement("div", { className: "table__column" }, selectAll && React.createElement(Checkbox, { checkAll: true }))),
        headers.map(function (header, index) {
            return isColumnVisible(header) && (React.createElement("div", { className: "table__column", key: index }, header.sortable ? (React.createElement("div", { className: "sortable", onClick: function () { return handleSort(header.accessor); } },
                React.createElement("span", null, header.title),
                sortProps.orderBy === header.accessor &&
                    (sortProps.order === "asc" ? (React.createElement(FaCaretDown, null)) : (React.createElement(FaCaretUp, null))))) : (header.title)));
        })));
};
export default TableHeader;
