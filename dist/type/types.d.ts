import React from "react";
type ColumnAccessorFunctionType = (row: any) => any;
type SortDirection = "asc" | "desc";
type DatalistSingleItemType = {
    index: number | string;
    [key: string]: any;
};
type HeaderSingleItemType = {
    filterable: React.JSX.Element;
    id: number | string;
    title: string;
    accessor: string;
    render: ColumnAccessorFunctionType;
    sortable?: boolean;
    filtarable?: boolean;
    filterType?: TableFilterTypes;
};
type TableSingleExportType = "json" | "csv";
type TableExportOptionsType = {
    exportType: TableSingleExportType;
    fileName?: string;
};
type TableFilterTypes = "string" | "number" | "date";
type TablePaginationOptionsType = {
    itemsPerPageList: number[];
    totalItems: number;
    defaultItemsPerPage?: number;
    defaultCurrentPage?: number;
    showResultsCounts?: boolean;
    showSkipToPageButton?: boolean;
    showCompressedButtons?: boolean;
};
type OnSortClickEventType = (dir: SortDirection, orderByAccessor: string) => void;
type OnPaginationChangesEventType = (currentPage: number, currentItemsPerPage: number) => void;
type OnRowHoverEventType = (rowId: number, rowItems: any) => void;
type OnSingleRowSelectEventType = (rowIndex: number, row: any, selectedRows: any[]) => void;
type OnRowSelectEventType = (selectedRows: any[]) => void;
type OnRowClickEventType = (selectedRows: any[], rowIndex: number) => void;
type OnTableExportingEventType = (rowId: number, rowItems: any) => void;
type OnTableFilteringEventType = (type: TableFilterTypes, accessor: string, value: string | number) => void;
interface ITableProps {
    dataList: DatalistSingleItemType[];
    headers: HeaderSingleItemType[];
    uniqueKeyAccessor?: string;
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
    selectAll?: boolean;
    stickyHeader?: boolean;
    stickyFooter?: boolean;
    columnSettings?: boolean;
    exportOptions?: TableExportOptionsType[];
    paginationOptions?: TablePaginationOptionsType;
    responsive?: boolean;
    onSort?: OnSortClickEventType;
    onPaginationChange?: OnPaginationChangesEventType;
    onRowHover?: OnRowHoverEventType;
    onRowSelect?: OnRowSelectEventType;
    onRowClick?: OnRowClickEventType;
    onSingleRowSelect?: OnSingleRowSelectEventType;
    onRowExporting?: OnTableExportingEventType;
    onFiltering?: OnTableFilteringEventType;
    onError?: (message: string) => void;
}
export { ITableProps, ColumnAccessorFunctionType, SortDirection, DatalistSingleItemType, HeaderSingleItemType, TableExportOptionsType, TableFilterTypes, TablePaginationOptionsType, OnSortClickEventType, OnRowHoverEventType, OnRowSelectEventType, OnTableExportingEventType, OnTableFilteringEventType, TableSingleExportType, };
