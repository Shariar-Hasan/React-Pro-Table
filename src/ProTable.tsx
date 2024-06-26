import React, { createContext, useState } from "react";
import "../assets/css/global.css";
import { ITableProps } from "./type/types";
import TableTop from "./components/TableSections/TableTop";
import Checkbox from "./components/SharedComponents/Checkbox";
import TableHeader from "./components/TableSections/TableHeader";
import TableBody from "./components/TableSections/TableBody";
import TableContextProvider from "./hooksAndContexts/TableContext";
import TableFooter from "./components/TableSections/TableFooter";
import TableBodyFooter from "./components/TableSections/TableBodyFooter";

const Table = (props: ITableProps) => {
  const { responsive, dataList, tableHeight, stickyHeader, stickyFooter } =
    props;
  // common states

  return (
    <TableContextProvider value={props}>
      <div className="rpt__body">
        <TableTop />
        <div
          style={{
            maxHeight:
              stickyHeader || stickyFooter || tableHeight
                ? tableHeight
                  ? tableHeight
                  : "400px"
                : "auto",
          }}
          className={`rpt__wrapper ${responsive ? "rpt__responsive" : ""}`}
        >
          <div className="rpt__table">
            {/* Table Header Section */}
            <TableHeader />
            {/* Table Body SEction */}
            <TableBody />
            {/* Table Body Footer SEction */}
            <TableBodyFooter />
          </div>
        </div>
        {/* Table Footer SEction */}
        <TableFooter />
      </div>
    </TableContextProvider>
  );
};

export default Table;
