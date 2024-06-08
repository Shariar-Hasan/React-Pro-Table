import React from "react";
import "../assets/css/global.css";
import TableTop from "./components/TableSections/TableTop";
import TableHeader from "./components/TableSections/TableHeader";
import TableBody from "./components/TableSections/TableBody";
import TableContextProvider from "./hooksAndContexts/TableContext";
import TableFooter from "./components/TableSections/TableFooter";
var Table = function (props) {
    var responsive = props.responsive;
    // common states
    return (React.createElement(TableContextProvider, { value: props },
        React.createElement("div", { className: "table__body" },
            React.createElement(TableTop, null),
            React.createElement("div", { className: "table__wrpper ".concat(responsive ? "table__responsive" : "") },
                React.createElement("div", { className: "table__table" },
                    React.createElement(TableHeader, null),
                    React.createElement(TableBody, null))),
            React.createElement(TableFooter, null))));
};
export default Table;
