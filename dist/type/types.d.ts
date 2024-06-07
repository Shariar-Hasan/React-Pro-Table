type ColumnAccessorFunctionType = (row: any) => any;
type SortDirection = "asc" | "desc";
type DatalistSingleItemType = {
    [key: string]: any;
};
type HeaderSingleItemType = {
    title: string;
    accessor: string;
    render: ColumnAccessorFunctionType;
    sortable?: boolean;
};
type TableSingleExportType = "json" | "csv";
type TableExportOptionsType = {
    exportType: TableSingleExportType;
    fileName?: string;
};
type TableFilterTypes = "text" | "number" | "date";
type TableFilterOptionsType = {
    filterBy: string;
    defaultValue?: string;
    filterType: TableFilterTypes;
};
type TablePaginationOptionsType = {
    itemsPerPageList: number[];
    defaultItemsPerPage?: number;
    defaultCurrentPage?: number;
    showResultsCounts?: boolean;
    paginationLabel?: string;
    skipToFirstPage?: boolean;
    skipToLastPage?: boolean;
    showPagination: boolean;
    showFirstAndLastPageButtons?: boolean;
};
type OnSortClickEventType = (dir: SortDirection, orderBy: string) => void;
type OnRowHoverEventType = (rowId: number, rowItems: any) => void;
type OnRowSelectEventType = (rowId: number, rowItems: any) => void;
type OnTableExportingEventType = (rowId: number, rowItems: any) => void;
type OnTableFilteringEventType = (type: TableFilterTypes, value: any) => void;
interface ITableProps {
    dataList: DatalistSingleItemType[];
    headers: HeaderSingleItemType[];
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
    selectAll?: boolean;
    exportOptions?: TableExportOptionsType[];
    filterOptions?: TableFilterOptionsType[];
    paginationOptions?: TablePaginationOptionsType;
    responsive?: boolean;
    onSortClick?: OnSortClickEventType;
    onRowHover?: OnRowHoverEventType;
    onRowSelect?: OnRowSelectEventType;
    onRowExporting?: OnTableExportingEventType;
    onFiltering?: OnTableFilteringEventType;
}
export { ITableProps, ColumnAccessorFunctionType, SortDirection, DatalistSingleItemType, HeaderSingleItemType, TableExportOptionsType, TableFilterTypes, TableFilterOptionsType, TablePaginationOptionsType, OnSortClickEventType, OnRowHoverEventType, OnRowSelectEventType, OnTableExportingEventType, OnTableFilteringEventType, TableSingleExportType, };
