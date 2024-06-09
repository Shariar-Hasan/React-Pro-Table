import React, { createContext, useState } from "react";
import "../assets/css/global.css";
import { ITableProps } from "./type/types";
import TableTop from "./components/TableSections/TableTop";
import Checkbox from "./components/SharedComponents/Checkbox";
import TableHeader from "./components/TableSections/TableHeader";
import TableBody from "./components/TableSections/TableBody";
import TableContextProvider from "./hooksAndContexts/TableContext";
import TableFooter from "./components/TableSections/TableFooter";

const Table = (props: ITableProps) => {
  const { responsive } = props;
  // common states
  return (
    <TableContextProvider value={props}>
      <div className="rpt__body">
        <TableTop />
        <div
          className={`rpt__wrpper ${responsive ? "rpt__responsive" : ""}`}
        >
          <div className="rpt__table">
            {/* Table Header Section */}
            <TableHeader />
            {/* Table Body SEction */}
            <TableBody />
          </div>
        </div>
        {/* Table Footer SEction */}
        <TableFooter />
      </div>
    </TableContextProvider>
  );
};

export default Table;
