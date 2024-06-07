import React from "react";
import { HeaderSingleItemType, TableSingleExportType } from "../../type/types";
import { exportAsCsv, exportAsJson } from "../../helper/mainHelpers";

const ExportButton = ({
  type,
  headers,
  dataList,
  fileName,
}: {
  type: TableSingleExportType;
  headers: HeaderSingleItemType[];
  dataList: any;
  fileName?: string;
}) => {
  const getButtonText = () => {
    switch (type) {
      case "csv":
        return "Export as CSV";
      case "json":
        return "Export as JSON";
      default:
        throw new Error("Incorrect export type");
    }
  };
  const getButtonHandleClick = () => {
    switch (type) {
      case "csv":
        return exportAsCsv(headers, dataList, fileName);
      case "json":
        return exportAsJson(dataList, fileName);
      default:
        throw new Error("Incorrect export type");
    }
  };
  return (
    <div>
      <button className="table__export-button" onClick={getButtonHandleClick}>
        {getButtonText()}
      </button>
    </div>
  );
};

export default ExportButton;
