import React from "react";
import PaginationFooter from "../SharedComponents/PaginationFooter";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var TableFooter = function () {
    var paginationOptions = useTableProps().paginationOptions;
    return (React.createElement("div", { className: "table__table-footer" }, paginationOptions && React.createElement(PaginationFooter, null)));
};
export default TableFooter;
