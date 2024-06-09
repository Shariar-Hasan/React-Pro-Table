import React, { useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import Checkbox from "../SharedComponents/Checkbox";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const TableHeader = () => {
  const {
    headers,
    bordered,
    stickyHeader,
    striped,
    selectable,
    selectAll,
    visibleColumns,
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
        <div className="rpt__column">
          {selectAll && <Checkbox checkAll />}
        </div>
      )}
      {headers.map(
        (header, index) =>
          isColumnVisible(header) && (
            <div className={`rpt__column`} key={index}>
              {header.sortable ? (
                <div
                  className="sortable"
                  onClick={() => handleSort(header.accessor)}
                >
                  <span>{header.title}</span>
                  {sortProps.orderBy === header.accessor &&
                    (sortProps.order === "asc" ? (
                      <FaCaretDown />
                    ) : (
                      <FaCaretUp />
                    ))}
                </div>
              ) : (
                header.title
              )}
            </div>
          )
      )}
    </div>
  );
};

export default TableHeader;
