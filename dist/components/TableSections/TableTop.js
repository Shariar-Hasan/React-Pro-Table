import React from "react";
import ExportButtonList from "../SharedComponents/ExportSection/ExportButtonList";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import ColumnSettings from "../SharedComponents/ColumnSettings";
import ContextMenu from "../SharedComponents/ContextMenu";
var TableTop = function () {
    var _a = useTableProps(), exportOptions = _a.exportOptions, selectedRows = _a.selectedRows, headers = _a.headers, columnSettings = _a.columnSettings;
    return (React.createElement("div", { className: "rpt__top" },
        React.createElement(ContextMenu, null),
        React.createElement("div", { className: "rpt__top-left" }, exportOptions && exportOptions.length > 0 && React.createElement(ExportButtonList, null)),
        React.createElement("div", { className: "rpt__top-middle" }),
        React.createElement("div", { className: "rpt__top-right" },
            React.createElement("div", null, selectedRows &&
                selectedRows.length > 0 &&
                selectedRows.length + " rows selected"),
            columnSettings && React.createElement(ColumnSettings, null))));
};
export default TableTop;
