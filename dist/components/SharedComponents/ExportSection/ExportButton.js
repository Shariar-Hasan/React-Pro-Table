import React from "react";
import { exportAsCsv, exportAsJson } from "../../../helper/mainHelpers";
import { useTableProps } from "../../../hooksAndContexts/TableContext";
import { getVisibleData } from "../../../helper/getManipulatedData";
var ExportButton = function (_a) {
    var type = _a.type, fileName = _a.fileName;
    var _b = useTableProps(), dataList = _b.dataList, headers = _b.headers, exportOptions = _b.exportOptions, visibleColumns = _b.visibleColumns, onError = _b.onError;
    var getButtonText = function () {
        switch (type) {
            case "csv":
                return "Export as CSV";
            case "json":
                return "Export as JSON";
            default:
                onError && onError("Incorrect export type");
                throw new Error("Incorrect export type");
        }
    };
    var getButtonHandleClick = function () {
        var newVisibleDataList = getVisibleData(dataList, visibleColumns);
        switch (type) {
            case "csv":
                return exportAsCsv(headers, newVisibleDataList, fileName);
            case "json":
                return exportAsJson(newVisibleDataList, fileName);
            default:
                onError && onError("Incorrect export type");
                throw new Error("Incorrect export type");
        }
    };
    return (React.createElement("div", null,
        React.createElement("button", { className: "rpt__export-button", onClick: getButtonHandleClick }, getButtonText())));
};
export default ExportButton;
