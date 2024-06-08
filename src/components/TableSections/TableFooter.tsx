import React from "react";
import PaginationFooter from "../SharedComponents/PaginationFooter";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const TableFooter = () => {
  const { paginationOptions } = useTableProps();
  return <div className="table__table-footer">{paginationOptions && <PaginationFooter />}</div>;
};

export default TableFooter;
