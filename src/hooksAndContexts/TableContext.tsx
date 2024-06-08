import React, { createContext, useContext, useEffect, useState } from "react";
import {
  HeaderSingleItemType,
  ITableProps,
  TableContextProps,
} from "../type/types";
import useRevalidateProps from "./useRevalidateProps";
export const TableContext = createContext<TableContextProps>({} as any);
export const useTableProps = () => useContext(TableContext);
const TableContextProvider = ({
  value,
  children,
}: {
  value: ITableProps;
  children: React.ReactNode;
}) => {
  const {
    // common Props
    dataList,
    headers,
    uniqueKeyAccessor,
    // events
    onRowSelect,
    onRowClick,
    onSingleRowSelect,
  } = useRevalidateProps(value);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [visibleColumns, setVisibleColumns] =
    useState<HeaderSingleItemType[]>(headers);

  // function customize

  const isSelected = (row: any) => {
    return selectedRows
      .map((r) => r[uniqueKeyAccessor as string])
      .includes(row[uniqueKeyAccessor as string]);
  };
  const isColumnVisible = (col: any) => {
    return visibleColumns.some((vcol) => vcol.id === col.id);
  };
  // common functions
  const handleRowClick = (row: any, index: number) => {
    onRowClick && onRowClick(row, index);
    if (isSelected(row)) {
      // if row already selected or
      const settingRowSelection = (prev: any[]) => {
        const newSelectedRows = prev.filter(
          (r) =>
            r[uniqueKeyAccessor as string] !== row[uniqueKeyAccessor as string]
        );
        onSingleRowSelect && onSingleRowSelect(index, row, newSelectedRows);
        return newSelectedRows;
      };

      setSelectedRows(settingRowSelection);
    } else {
      // if row not selected
      const newSelectedRows = [...selectedRows, row];
      onSingleRowSelect && onSingleRowSelect(index, row, newSelectedRows);
      setSelectedRows(newSelectedRows);
    }
  };
  const handleSelectAllRow = () => {
    if (selectedRows.length >= dataList.length && dataList.length > 0) {
      setSelectedRows([]);
      onRowSelect && onRowSelect([]);
    } else {
      const settingAllRowSelection = (prev: any[]) => {
        onRowSelect && onRowSelect(dataList);
        return dataList;
      };
      setSelectedRows(settingAllRowSelection);
    }
  };

  const handleSelectVisibleColumn = () => {};
  return (
    <TableContext.Provider
      value={{
        ...value,
        selectedRows,
        setSelectedRows,
        handleRowClick,
        handleSelectAllRow,
        isSelected,
        isColumnVisible,
        visibleColumns,
        setVisibleColumns,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
