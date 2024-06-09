import React from "react";
import PaginationFooter from "../SharedComponents/PaginationFooter";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const TableFooter = () => {
  const { paginationOptions } = useTableProps();
  return (
    <div className="rpt__table-footer">
      {paginationOptions && <PaginationFooter />}
      {
        // <div
        //   className="flex-center"
        //   style={{
        //     fontSize: "0.8rem",
        //     padding: "0.5rem",
        //     color: "gray",
        //     fontWeight: "bold",
        //   }}
        // >
        //   <a
        //     href="https://github.com/Shariar-Hasan/react-pro-table"
        //     target="_blank"
        //   >
        //     Made with react-pro-table
        //   </a>
        // </div>
      }
    </div>
  );
};

export default TableFooter;
