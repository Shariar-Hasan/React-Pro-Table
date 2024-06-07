// src/Table.tsx
import React, { useEffect, useRef } from "react";
import "../assets/css/global.css";
import { isString } from "./helper/shortHelpers";
import {
  ColumnAccessorFunctionType,
  ITableProps,
  TableExportOptionsType,
} from "./type/types";
import { exportAsJson } from "./helper/mainHelpers";
import ExportButton from "./components/ExportSection/ExportButton";
import ExportButtonList from "./components/ExportSection/ExportButtonList";

const Table = ({
  // common Props
  dataList,
  headers,
  bordered,
  exportOptions,
  filterOptions,
  hoverable,
  paginationOptions,
  selectAll,
  selectable,
  striped,
  responsive,
  // events
  onFiltering,
  onRowExporting,
  onRowHover,
  onRowSelect,
  onSortClick,
}: ITableProps) => {
  const tableRef = useRef<HTMLDivElement>(null);

  return (
    <div className="table__body">
      <div className="table__top">
        {exportOptions && exportOptions.length > 0 && (
          <ExportButtonList
            dataList={dataList}
            headers={headers}
            exportOptions={exportOptions}
          />
        )}
      </div>
      <div className={`table__wrpper ${responsive ? "table__responsive" : ""}`}>
        <div className="table__table" ref={tableRef}>
          {/* Table Header Section */}
          <div
            className={`table__header table__row ${bordered ? "bordered" : ""}`}
          >
            {headers.map((header, index) => (
              <div className="table__column" key={index}>
                {header.title}
              </div>
            ))}
          </div>
          {/* Table Body SEction */}
          <>
            {dataList.map((item, index) => (
              <div className="table__row bordered" key={index}>
                {headers.map((header, index) => (
                  <div className="table__column" key={index}>
                    {header.render(item)}
                  </div>
                ))}
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Table;
