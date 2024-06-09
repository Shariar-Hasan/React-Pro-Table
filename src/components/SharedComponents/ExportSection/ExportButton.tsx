import React, { useContext } from "react";
import {
  HeaderSingleItemType,
  TableSingleExportType,
} from "../../../type/types";
import { exportAsCsv, exportAsJson } from "../../../helper/mainHelpers";
import { useTableProps } from "../../../hooksAndContexts/TableContext";
import { getVisibleData } from "../../../helper/getManipulatedData";

const ExportButton = ({
  type, 
  fileName,
}: {
  type: TableSingleExportType;
  fileName?: string;
}) => {
  const { dataList, headers, exportOptions, visibleColumns, onError } =
    useTableProps();
  const getButtonText = () => {
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
  const getButtonHandleClick = () => {
    const newVisibleDataList = getVisibleData(dataList, visibleColumns);
    switch (type) {
      case "csv":
        return exportAsCsv(
          headers as HeaderSingleItemType[],
          newVisibleDataList,
          fileName
        );
      case "json":
        return exportAsJson(newVisibleDataList, fileName);
      default:
        onError && onError("Incorrect export type");
        throw new Error("Incorrect export type");
    }
  };
  return (
    <div>
      <button className="rpt__export-button" onClick={getButtonHandleClick}>
        {getButtonText()}
      </button>
    </div>
  );
};

export default ExportButton;
