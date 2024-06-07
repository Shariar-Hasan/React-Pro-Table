import React from "react";
import ExportButton from "./ExportButton";
import { HeaderSingleItemType, TableExportOptionsType } from "../../type/types";
import { TiArrowSortedDown } from "react-icons/ti";
interface PropsType {
  exportOptions: TableExportOptionsType[];
  dataList: any;
  headers: HeaderSingleItemType[];
}
const ExportButtonList = ({ exportOptions, dataList, headers }: PropsType) => {
  return (
    <div className="table__export-dropdown-wrapper">
      <button className="table__export-dropdown-button">
        Export as <TiArrowSortedDown />
      </button>
      <div className={`table__export-buttons-wrapper`}>
        {exportOptions.map((item: TableExportOptionsType) => (
          <ExportButton
            dataList={dataList}
            headers={headers}
            type={item.exportType}
          />
        ))}
      </div>
    </div>
  );
};

export default ExportButtonList;
