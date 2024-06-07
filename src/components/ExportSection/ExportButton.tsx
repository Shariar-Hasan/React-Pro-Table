import React, { useContext } from "react";
import {
  HeaderSingleItemType,
  TableContextProps,
  TableSingleExportType,
} from "../../type/types";
import { exportAsCsv, exportAsJson } from "../../helper/mainHelpers";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const ExportButton = ({
  type,
  fileName,
}: { 
  type: TableSingleExportType;
  fileName?: string;
}) => {
  const { dataList, headers, exportOptions } = useTableProps();
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
        return exportAsCsv(
          headers as HeaderSingleItemType[],
          dataList as any[],
          fileName
        );
      case "json":
        return exportAsJson(dataList as any[], fileName);
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
