import React, { useContext } from "react";
import ExportButton from "./ExportButton";
import { TableContextProps, TableExportOptionsType } from "../../type/types";
import { TiArrowSortedDown } from "react-icons/ti";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const ExportButtonList = () => {
  const { dataList, headers, exportOptions } = useTableProps();
  return (
    <div className="table__export-dropdown-wrapper" tabIndex={1}>
      <button className="table__export-dropdown-button">
        Export as <TiArrowSortedDown />
      </button>
      <div className={`table__export-buttons-wrapper`}>
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
