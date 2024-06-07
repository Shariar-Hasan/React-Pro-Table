import { Dispatch, SetStateAction } from "react";
/**
 * Type definition for a function that accesses a column value from a row.
 *
 * @typedef {function} ColumnAccessorFunctionType
 * @param {any} row - The row object.
 * @returns {any} - The value of the column.
 */
type ColumnAccessorFunctionType = (row: any) => any;
/**
 * Type definition for sort direction.
 *
 * @typedef {"asc" | "desc"} SortDirection
 */
type SortDirection = "asc" | "desc";
/**
 * Type definition for a single item in the data list.
 *
 * @typedef {Object.<string, any>} DatalistSingleItemType
 */
type DatalistSingleItemType = {
    index: number | string;
    [key: string]: any;
};
/**
 * Type definition for a single header item.
 *
 * @typedef {Object} HeaderSingleItemType
 * @property {string} title - The title of the column.
 * @property {string} accessor - The key to access the column value.
 * @property {ColumnAccessorFunctionType} render - The function to render the column value.
 * @property {boolean} [sortable] - Whether the column is sortable.
 */
type HeaderSingleItemType = {
    id: number | string;
    title: string;
    accessor: string;
    render: ColumnAccessorFunctionType;
    sortable?: boolean;
};
/**
 * Type definition for table export types.
 *
 * @typedef {"json" | "csv"} TableSingleExportType
 */
type TableSingleExportType = "json" | "csv";
/**
 * Type definition for table export options.
 *
 * @typedef {Object} TableExportOptionsType
 * @property {TableSingleExportType} exportType - The type of export (json or csv).
 * @property {string} [fileName] - The name of the export file.
 */
type TableExportOptionsType = {
    exportType: TableSingleExportType;
    fileName?: string;
};
/**
 * Type definition for table filter types.
 *
 * @typedef {"text" | "number" | "date"} TableFilterTypes
 */
type TableFilterTypes = "text" | "number" | "date";
/**
 * Type definition for table filter options.
 *
 * @typedef {Object} TableFilterOptionsType
 * @property {string} filterBy - The key to filter by.
 * @property {string} [defaultValue] - The default value of the filter.
 * @property {TableFilterTypes} filterType - The type of filter (text, number, date).
 */
type TableFilterOptionsType = {
    filterBy: string;
    defaultValue?: string;
    filterType: TableFilterTypes;
};
/**
 * Type definition for table pagination options.
 *
 * @typedef {Object} TablePaginationOptionsType
 * @property {number[]} itemsPerPageList - The list of items per page options.
 * @property {number} [defaultItemsPerPage] - The default number of items per page.
 * @property {number} [defaultCurrentPage] - The default current page.
 * @property {boolean} [showResultsCounts] - Whether to show results counts.
 * @property {string} [paginationLabel] - The label for pagination.
 * @property {boolean} [skipToFirstPage] - Whether to show the skip to first page button.
 * @property {boolean} [skipToLastPage] - Whether to show the skip to last page button.
 * @property {boolean} showPagination - Whether to show pagination.
 * @property {boolean} [showFirstAndLastPageButtons] - Whether to show first and last page buttons.
 */
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
/**
 * Type definition for the on sort click event.
 *
 * @typedef {function} OnSortClickEventType
 * @param {SortDirection} dir - The direction of the sort (asc or desc).
 * @param {string} orderBy - The key to order by.
 */
type OnSortClickEventType = (dir: SortDirection, orderBy: string) => void;
/**
 * Type definition for the on row hover event.
 *
 * @typedef {function} OnRowHoverEventType
 * @param {number} rowId - The ID of the row being hovered.
 * @param {any} rowItems - The items of the row being hovered.
 */
type OnRowHoverEventType = (rowId: number, rowItems: any) => void;
/**
 * Type definition for the on row select event.
 *
 * @typedef {function} OnRowSelectEventType
 * @param {number} rowId - The ID of the row being selected.
 * @param {any} rowItems - The items of the row being selected.
 */
type OnSingleRowSelectEventType = (rowIndex: number, row: any, selectedRows: any[]) => void;
type OnRowSelectEventType = (selectedRows: any[]) => void;
type OnRowClickEventType = (selectedRows: any[], rowIndex: number) => void;
/**
 * Type definition for the on table exporting event.
 *
 * @typedef {function} OnTableExportingEventType
 * @param {number} rowId - The ID of the row being exported.
 * @param {any} rowItems - The items of the row being exported.
 */
type OnTableExportingEventType = (rowId: number, rowItems: any) => void;
/**
 * Type definition for the on table filtering event.
 *
 * @typedef {function} OnTableFilteringEventType
 * @param {TableFilterTypes} type - The type of filter being applied.
 * @param {any} value - The value of the filter.
 */
type OnTableFilteringEventType = (type: TableFilterTypes, value: any) => void;
/**
 * Interface for the table component props.
 *
 * @interface ITableProps
 * @property {DatalistSingleItemType[]} dataList - The list of data items.
 * @property {HeaderSingleItemType[]} headers - The list of header items.
 * @property {boolean} [striped] - Whether the table has striped rows.
 * @property {boolean} [bordered] - Whether the table has borders.
 * @property {boolean} [hoverable] - Whether the table rows are hoverable.
 * @property {boolean} [selectable] - Whether the table rows are selectable.
 * @property {boolean} [selectAll] - Whether to allow selecting all rows.
 * @property {TableExportOptionsType[]} [exportOptions] - The export options for the table.
 * @property {TableFilterOptionsType[]} [filterOptions] - The filter options for the table.
 * @property {TablePaginationOptionsType} [paginationOptions] - The pagination options for the table.
 * @property {boolean} [responsive] - Whether the table is responsive.
 * @property {OnSortClickEventType} [onSortClick] - The event handler for sort click.
 * @property {OnRowHoverEventType} [onRowHover] - The event handler for row hover.
 * @property {OnRowSelectEventType} [onRowSelect] - The event handler for row select.
 * Note: props selectable must be true.
 * @property {OnTableExportingEventType} [onRowExporting] - The event handler for table exporting.
 * @property {OnTableFilteringEventType} [onFiltering] - The event handler for table filtering.
 */
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
    filterOptions?: TableFilterOptionsType[];
    paginationOptions?: TablePaginationOptionsType;
    responsive?: boolean;
    onSortClick?: OnSortClickEventType;
    onRowHover?: OnRowHoverEventType;
    onRowSelect?: OnRowSelectEventType;
    onRowClick?: OnRowClickEventType;
    onSingleRowSelect?: OnSingleRowSelectEventType;
    onRowExporting?: OnTableExportingEventType;
    onFiltering?: OnTableFilteringEventType;
    onError?: (message: string) => void;
}
type TableContextProps = ITableProps & {
    selectedRows: any[];
    setSelectedRows: Dispatch<SetStateAction<any[]>>;
    handleRowClick: (row: any, index: number) => void;
    handleSelectAllRow: () => void;
    isSelected: (row: any) => boolean;
    isColumnVisible: (col: HeaderSingleItemType) => boolean;
    visibleColumns: HeaderSingleItemType[];
    setVisibleColumns: Dispatch<SetStateAction<HeaderSingleItemType[]>>;
};
export { TableContextProps, ITableProps, ColumnAccessorFunctionType, SortDirection, DatalistSingleItemType, HeaderSingleItemType, TableExportOptionsType, TableFilterTypes, TableFilterOptionsType, TablePaginationOptionsType, OnSortClickEventType, OnRowHoverEventType, OnRowSelectEventType, OnTableExportingEventType, OnTableFilteringEventType, TableSingleExportType, };
