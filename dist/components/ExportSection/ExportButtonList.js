import React from "react";
import ExportButton from "./ExportButton";
import { TiArrowSortedDown } from "react-icons/ti";
var ExportButtonList = function (_a) {
    var exportOptions = _a.exportOptions, dataList = _a.dataList, headers = _a.headers;
    return (React.createElement("div", { className: "table__export-dropdown-wrapper" },
        React.createElement("button", { className: "table__export-dropdown-button" },
            "Export as ",
            React.createElement(TiArrowSortedDown, null)),
        React.createElement("div", { className: "table__export-buttons-wrapper" }, exportOptions.map(function (item) { return (React.createElement(ExportButton, { dataList: dataList, headers: headers, type: item.exportType })); }))));
};
export default ExportButtonList;
