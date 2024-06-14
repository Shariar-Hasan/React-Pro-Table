import React from "react";
import "../assets/css/global.css";
import TableTop from "./components/TableSections/TableTop";
import TableHeader from "./components/TableSections/TableHeader";
import TableBody from "./components/TableSections/TableBody";
import TableContextProvider from "./hooksAndContexts/TableContext";
import TableFooter from "./components/TableSections/TableFooter";
import TableBodyFooter from "./components/TableSections/TableBodyFooter";
var Table = function (props) {
    var responsive = props.responsive, dataList = props.dataList, tableHeight = props.tableHeight, stickyHeader = props.stickyHeader, stickyFooter = props.stickyFooter;
    // common states
    return (React.createElement(TableContextProvider, { value: props },
        React.createElement("div", { className: "rpt__body" },
            React.createElement(TableTop, null),
            React.createElement("div", { style: {
                    maxHeight: stickyHeader || stickyFooter || tableHeight
                        ? tableHeight
                            ? tableHeight
                            : "400px"
                        : "auto",
                }, className: "rpt__wrapper ".concat(responsive ? "rpt__responsive" : "") },
                React.createElement("div", { className: "rpt__table" },
                    React.createElement(TableHeader, null),
                    React.createElement(TableBody, null),
                    React.createElement(TableBodyFooter, null))),
            React.createElement(TableFooter, null))));
};
export default Table;
