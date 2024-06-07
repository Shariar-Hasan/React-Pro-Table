import React from "react";
import "../assets/css/global.css";
import TableTop from "./components/TableSections/TableTop";
import TableHeader from "./components/TableSections/TableHeader";
import TableBody from "./components/TableSections/TableBody";
import TableContextProvider from "./hooksAndContexts/TableContext";
var Table = function (props) {
    var 
    // common Props
    dataList = props.dataList, headers = props.headers, bordered = props.bordered, exportOptions = props.exportOptions, filterOptions = props.filterOptions, hoverable = props.hoverable, paginationOptions = props.paginationOptions, selectAll = props.selectAll, selectable = props.selectable, striped = props.striped, responsive = props.responsive, stickyFooter = props.stickyFooter, stickyHeader = props.stickyHeader, 
    // events
    onFiltering = props.onFiltering, onRowExporting = props.onRowExporting, onRowHover = props.onRowHover, onRowSelect = props.onRowSelect, onSortClick = props.onSortClick;
    // common states
    return (React.createElement(TableContextProvider, { value: props },
        React.createElement("div", { className: "table__body" },
            React.createElement(TableTop, null),
            React.createElement("div", { className: "table__wrpper ".concat(responsive ? "table__responsive" : "") },
                React.createElement("div", { className: "table__table" },
                    React.createElement(TableHeader, null),
                    React.createElement(TableBody, null))))));
};
export default Table;
