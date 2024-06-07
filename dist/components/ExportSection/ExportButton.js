import React from "react";
import { exportAsCsv, exportAsJson } from "../../helper/mainHelpers";
var ExportButton = function (_a) {
    var type = _a.type, headers = _a.headers, dataList = _a.dataList, fileName = _a.fileName;
    var getButtonText = function () {
        switch (type) {
            case "csv":
                return "Export as CSV";
            case "json":
                return "Export as JSON";
            default:
                throw new Error("Incorrect export type");
        }
    };
    var getButtonHandleClick = function () {
        switch (type) {
            case "csv":
                return exportAsCsv(headers, dataList, fileName);
            case "json":
                return exportAsJson(dataList, fileName);
            default:
                throw new Error("Incorrect export type");
        }
    };
    return (React.createElement("div", null,
        React.createElement("button", { className: "table__export-button", onClick: getButtonHandleClick }, getButtonText())));
};
export default ExportButton;
