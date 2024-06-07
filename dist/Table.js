// src/Table.tsx
import React, { useRef } from "react";
import "../assets/css/global.css";
import ExportButtonList from "./components/ExportSection/ExportButtonList";
var Table = function (_a) {
    var 
    // common Props
    dataList = _a.dataList, headers = _a.headers, bordered = _a.bordered, exportOptions = _a.exportOptions, filterOptions = _a.filterOptions, hoverable = _a.hoverable, paginationOptions = _a.paginationOptions, selectAll = _a.selectAll, selectable = _a.selectable, striped = _a.striped, responsive = _a.responsive, 
    // events
    onFiltering = _a.onFiltering, onRowExporting = _a.onRowExporting, onRowHover = _a.onRowHover, onRowSelect = _a.onRowSelect, onSortClick = _a.onSortClick;
    var tableRef = useRef(null);
    return (React.createElement("div", { className: "table__body" },
        React.createElement("div", { className: "table__top" }, exportOptions && exportOptions.length > 0 && (React.createElement(ExportButtonList, { dataList: dataList, headers: headers, exportOptions: exportOptions }))),
        React.createElement("div", { className: "table__wrpper ".concat(responsive ? "table__responsive" : "") },
            React.createElement("div", { className: "table__table", ref: tableRef },
                React.createElement("div", { className: "table__header table__row ".concat(bordered ? "bordered" : "") }, headers.map(function (header, index) { return (React.createElement("div", { className: "table__column", key: index }, header.title)); })),
                React.createElement(React.Fragment, null, dataList.map(function (item, index) { return (React.createElement("div", { className: "table__row bordered", key: index }, headers.map(function (header, index) { return (React.createElement("div", { className: "table__column", key: index }, header.render(item))); }))); }))))));
};
export default Table;
