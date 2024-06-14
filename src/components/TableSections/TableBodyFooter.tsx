import React from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const TableBodyFooter = () => {
  const { headers, selectable, enableBodyFooter } = useTableProps();
  return (
    enableBodyFooter && (
      <div className="rpt__row rpt__body-footer-sticky">
        {selectable && <div className="rpt__column"></div>}
        {headers.map((item, index) => (
          <div key={index} className="rpt__column"></div>
        ))}
      </div>
    )
  );
};

export default TableBodyFooter;
