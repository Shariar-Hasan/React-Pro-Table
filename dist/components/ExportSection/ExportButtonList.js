import React from "react";
import ExportButton from "./ExportButton";
import { TiArrowSortedDown } from "react-icons/ti";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var ExportButtonList = function () {
    var _a = useTableProps(), dataList = _a.dataList, headers = _a.headers, exportOptions = _a.exportOptions;
    return (React.createElement("div", { className: "rpt__export-dropdown-wrapper", tabIndex: 1 },
        React.createElement("button", { className: "rpt__export-dropdown-button" },
            "Export as ",
            React.createElement(TiArrowSortedDown, null)),
        React.createElement("div", { className: "rpt__export-buttons-wrapper" }, exportOptions === null || exportOptions === void 0 ? void 0 : exportOptions.map(function (item, index) { return (React.createElement(ExportButton, { key: index, type: item.exportType, fileName: item.fileName })); }))));
};
export default ExportButtonList;
