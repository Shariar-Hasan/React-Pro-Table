import React from "react";
import { ITableProps, TableContextProps } from "../type/types";
export declare const TableContext: React.Context<TableContextProps>;
export declare const useTableProps: () => TableContextProps;
declare const TableContextProvider: ({ value, children, }: {
    value: ITableProps;
    children: React.ReactNode;
}) => React.JSX.Element;
export default TableContextProvider;
