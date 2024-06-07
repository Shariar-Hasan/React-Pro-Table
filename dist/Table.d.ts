import React from "react";
import "../assets/css/global.css";
import { ITableProps } from "./type/types";
declare const Table: ({ dataList, headers, bordered, exportOptions, filterOptions, hoverable, paginationOptions, selectAll, selectable, striped, responsive, onFiltering, onRowExporting, onRowHover, onRowSelect, onSortClick, }: ITableProps) => React.JSX.Element;
export default Table;
