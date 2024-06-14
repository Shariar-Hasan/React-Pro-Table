import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DatalistSingleItemType,
  HeaderSingleItemType,
  ITableProps,
} from "../type/types";
import useRevalidateProps from "./useRevalidateProps";
export const TableContext = createContext<TableContextProps>({} as any);
export const useTableProps = () => useContext(TableContext);
export type TableContextProps = ITableProps & {
  selectedRows: any[];
  setSelectedRows: Dispatch<SetStateAction<any[]>>;
  handleRowClick: (row: any, index: number) => void;
  handleSelectAllRow: () => void;
  isSelected: (row: any) => boolean;
  isColumnVisible: (col: HeaderSingleItemType) => boolean;
  visibleColumns: HeaderSingleItemType[];
  setVisibleColumns: Dispatch<SetStateAction<HeaderSingleItemType[]>>;
  handleFilterSectionClick: (header: HeaderSingleItemType) => void;
};
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
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

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
  // handle modal close
  const handleModalClose = () => {
    setIsFilterModalOpen(false);
  };

  // row click function
  const handleRowClick = (row: DatalistSingleItemType, index: number) => {
    // console.log({ row, index });
    if (isSelected(row)) {
      // if row already selected or

      setSelectedRows((prev: any[]) => {
        const newSelectedRows = prev.filter(
          (r) =>
            r[uniqueKeyAccessor as string] !== row[uniqueKeyAccessor as string]
        );
        onSingleRowSelect && onSingleRowSelect(index, row, newSelectedRows);
        console.log({ ifselected: newSelectedRows,  });
        return newSelectedRows;
      });
    } else {
      // if row not selected
      const newSelectedRows = [...selectedRows, row];
      onSingleRowSelect && onSingleRowSelect(index, row, newSelectedRows);
      setSelectedRows(newSelectedRows);
      console.log({ ifNotselected: newSelectedRows });
    }
  };

  // select all row function
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

  // filter section click handler
  const handleFilterSectionClick = (selectedHeader: HeaderSingleItemType) => {};

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
        handleFilterSectionClick,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
