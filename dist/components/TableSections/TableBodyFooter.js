import React from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var TableBodyFooter = function () {
    var _a = useTableProps(), headers = _a.headers, selectable = _a.selectable, enableBodyFooter = _a.enableBodyFooter;
    return (enableBodyFooter && (React.createElement("div", { className: "rpt__row rpt__body-footer-sticky" },
        selectable && React.createElement("div", { className: "rpt__column" }),
        headers.map(function (item, index) { return (React.createElement("div", { key: index, className: "rpt__column" })); }))));
};
export default TableBodyFooter;
