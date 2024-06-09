import React, { useContext } from "react";
import ExportButtonList from "../ExportSection/ExportButtonList";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import { MdSettings } from "react-icons/md";
import ColumnSettings from "../SharedComponents/ColumnSettings";

const TableTop = () => {
  const { exportOptions, selectedRows, headers, columnSettings } =
    useTableProps();
  return (
    <div className="rpt__top">
      <div className="rpt__top-left">
        {exportOptions && exportOptions.length > 0 && <ExportButtonList />}
      </div>
      <div className="rpt__top-middle"></div>
      <div className="rpt__top-right">
        <div>
          {selectedRows &&
            selectedRows.length > 0 &&
            selectedRows.length + " rows selected"}
        </div>
        {columnSettings && <ColumnSettings />}
      </div>
    </div>
  );
};

export default TableTop;
