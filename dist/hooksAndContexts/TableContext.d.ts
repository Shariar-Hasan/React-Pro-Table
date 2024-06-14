import React, { Dispatch, SetStateAction } from "react";
import { HeaderSingleItemType, ITableProps } from "../type/types";
export declare const TableContext: React.Context<TableContextProps>;
export declare const useTableProps: () => TableContextProps;
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
declare const TableContextProvider: ({ value, children, }: {
    value: ITableProps;
    children: React.ReactNode;
}) => React.JSX.Element;
export default TableContextProvider;
