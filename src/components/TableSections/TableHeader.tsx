import React, { useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import Checkbox from "../SharedComponents/Checkbox";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
const TableHeader = () => {
  const {
    headers,
    bordered,
    stickyHeader,
    striped,
    selectable,
    selectAll,
    onSort,
    isColumnVisible,
  } = useTableProps();
  const [sortProps, setSortProps] = useState({
    order: "",
    orderBy: "",
  });
  const handleSort = (name: string) => {
    if (sortProps.order === "desc") {
      setSortProps({ order: "asc", orderBy: name });
      onSort && onSort("asc", name);
    } else {
      setSortProps({ order: "desc", orderBy: name });
      onSort && onSort("desc", name);
    }
  };
  return (
    <div
      className={`rpt__header rpt__row ${bordered ? "bordered" : ""} ${
        stickyHeader ? "sticky" : ""
      } ${striped ? "striped" : ""}`}
    >
      {selectable && (
        <div className="rpt__column">{selectAll && <Checkbox checkAll />}</div>
      )}
      {headers.map(
        (header, index) =>
          isColumnVisible(header) && (
            <div className={`rpt__column `} key={index}>
              <div className="d-flex justify-content-between gap-2">
                {header.sortable ? (
                  <div
                    className="sortable flex-grow"
                    onClick={() => handleSort(header.accessor)}
                  >
                    <span>{header.title}</span>
                    <span className="flex-center">
                      {sortProps.orderBy === header.accessor &&
                        (sortProps.order === "asc" ? (
                          <BsSortAlphaUp />
                        ) : (
                          <BsSortAlphaDown />
                        ))}
                    </span>
                  </div>
                ) : (
                  header.title
                )}
                {header.filterable && (
                  <span
                    className="flex-center cursor-pointer"
                    onClick={() => {}}
                  >
                    <LuFilter />
                  </span>
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TableHeader;
