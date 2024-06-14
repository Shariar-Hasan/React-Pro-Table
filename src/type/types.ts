import React, { Dispatch, SetStateAction } from "react";

type ColumnAccessorFunctionType = (row: any) => any;

type SortDirection = "asc" | "desc";

// datalist type settings for single item
type DatalistSingleItemType = {
  index: number | string;
  [key: string]: any;
};

// header type setting
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

// Export related
type TableSingleExportType = "json" | "csv";
type TableExportOptionsType = {
  exportType: TableSingleExportType;
  fileName?: string;
};

// table filter type settings
type TableFilterTypes = "string" | "number" | "date";

// table pagination type settings
type TablePaginationOptionsType = {
  itemsPerPageList: number[];
  totalItems: number;
  defaultItemsPerPage?: number;
  defaultCurrentPage?: number;
  showResultsCounts?: boolean;
  showSkipToPageButton?: boolean;
  showCompressedButtons?: boolean;
};

// event handlers
type OnSortClickEventType = (
  dir: SortDirection,
  orderByAccessor: string
) => void;

type OnPaginationChangesEventType = (
  currentPage: number,
  currentItemsPerPage: number
) => void;

type OnRowHoverEventType = (rowId: number, rowItems: any) => void;

type OnSingleRowSelectEventType = (
  rowIndex: number,
  row: any,
  selectedRows: any[]
) => void;

type OnRowSelectEventType = (selectedRows: any[]) => void;

type OnRowClickEventType = (
  selectedRows: DatalistSingleItemType[],
  rowIndex: number
) => void;
type OnCellClickEventType = (
  accessor: string,
  header: string,
  value: any
) => void;

type OnTableExportingEventType = (rowId: number, rowItems: any) => void;

type OnTableFilteringEventType = (
  type: TableFilterTypes,
  accessor: string,
  value: string | number
) => void;

// main table props type setting
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
  hideHeader?: boolean;
  stickyFooter?: boolean;
  columnSettings?: boolean;
  exportOptions?: TableExportOptionsType[];
  paginationOptions?: TablePaginationOptionsType;
  responsive?: boolean;
  enableBodyFooter?: boolean;
  tableHeight?: number;

  // events
  onSort?: OnSortClickEventType;
  onPaginationChange?: OnPaginationChangesEventType;
  onRowHover?: OnRowHoverEventType;
  onRowSelect?: OnRowSelectEventType;
  onRowClick?: OnRowClickEventType;
  onCellClick?: OnCellClickEventType;
  onSingleRowSelect?: OnSingleRowSelectEventType;
  onRowExporting?: OnTableExportingEventType;
  onFiltering?: OnTableFilteringEventType;
  onError?: (message: string) => void;
}

export {
  ITableProps,
  ColumnAccessorFunctionType,
  SortDirection,
  DatalistSingleItemType,
  HeaderSingleItemType,
  TableExportOptionsType,
  TableFilterTypes,
  TablePaginationOptionsType,
  OnSortClickEventType,
  OnRowHoverEventType,
  OnRowSelectEventType,
  OnTableExportingEventType,
  OnTableFilteringEventType,
  TableSingleExportType,
};
