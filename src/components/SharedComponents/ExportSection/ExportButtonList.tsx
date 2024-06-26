import React from "react";
import ExportButton from "./ExportButton";
import { TableExportOptionsType } from "../../../type/types";
import { TiArrowSortedDown } from "react-icons/ti";
import { useTableProps } from "../../../hooksAndContexts/TableContext";

const ExportButtonList = () => {
  const { dataList, headers, exportOptions } = useTableProps();
  return (
    <div className="rpt__export-dropdown-wrapper" tabIndex={1}>
      <button className="rpt__export-dropdown-button">
        Export as <TiArrowSortedDown />
      </button>
      <div className={`rpt__export-buttons-wrapper`}>
        {exportOptions?.map((item: TableExportOptionsType, index: number) => (
          <ExportButton
            key={index}
            type={item.exportType}
            fileName={item.fileName}
          />
        ))}
      </div>
    </div>
  );
};

export default ExportButtonList;
