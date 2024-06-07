import React, { createContext, useState } from "react";
import "../assets/css/global.css";
import { ITableProps, TableContextProps } from "./type/types";
import TableTop from "./components/TableSections/TableTop";
import Checkbox from "./components/SharedComponents/Checkbox";
import TableHeader from "./components/TableSections/TableHeader";
import TableBody from "./components/TableSections/TableBody";
import TableContextProvider from "./hooksAndContexts/TableContext";

const Table = (props: ITableProps) => {
  const {
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
    stickyFooter,
    stickyHeader,

    // events
    onFiltering,
    onRowExporting,
    onRowHover,
    onRowSelect,
    onSortClick,
  } = props;
  // common states
  return (
    <TableContextProvider value={props}>
      <div className="table__body">
        <TableTop />
        <div
          className={`table__wrpper ${responsive ? "table__responsive" : ""}`}
        >
          <div className="table__table">
            {/* Table Header Section */}
            <TableHeader />
            {/* Table Body SEction */}
            <TableBody />
          </div>
        </div>
      </div>
    </TableContextProvider>
  );
};

export default Table;
