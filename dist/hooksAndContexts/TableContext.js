var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { createContext, useContext, useState } from "react";
import useRevalidateProps from "./useRevalidateProps";
export var TableContext = createContext({});
export var useTableProps = function () { return useContext(TableContext); };
var TableContextProvider = function (_a) {
    var value = _a.value, children = _a.children;
    var _b = useRevalidateProps(value), 
    // common Props
    dataList = _b.dataList, headers = _b.headers, bordered = _b.bordered, exportOptions = _b.exportOptions, filterOptions = _b.filterOptions, hoverable = _b.hoverable, paginationOptions = _b.paginationOptions, selectAll = _b.selectAll, selectable = _b.selectable, striped = _b.striped, responsive = _b.responsive, stickyFooter = _b.stickyFooter, stickyHeader = _b.stickyHeader, uniqueKeyAccessor = _b.uniqueKeyAccessor, 
    // events
    onFiltering = _b.onFiltering, onRowExporting = _b.onRowExporting, onRowHover = _b.onRowHover, onRowSelect = _b.onRowSelect, onRowClick = _b.onRowClick, onSingleRowSelect = _b.onSingleRowSelect, onSortClick = _b.onSortClick;
    var _c = useState([]), selectedRows = _c[0], setSelectedRows = _c[1];
    var _d = useState(headers), visibleColumns = _d[0], setVisibleColumns = _d[1];
    var isSelected = function (row) {
        return selectedRows
            .map(function (r) { return r[uniqueKeyAccessor]; })
            .includes(row[uniqueKeyAccessor]);
    };
    var isColumnVisible = function (col) {
        return visibleColumns.some(function (vcol) { return vcol.id === col.id; });
    };
    // common functions
    var handleRowClick = function (row, index) {
        onRowClick && onRowClick(row, index);
        if (isSelected(row)) {
            // if row already selected or
            var settingRowSelection = function (prev) {
                var newSelectedRows = prev.filter(function (r) {
                    return r[uniqueKeyAccessor] !== row[uniqueKeyAccessor];
                });
                onSingleRowSelect && onSingleRowSelect(index, row, newSelectedRows);
                return newSelectedRows;
            };
            setSelectedRows(settingRowSelection);
        }
        else {
            // if row not selected
            var newSelectedRows = __spreadArray(__spreadArray([], selectedRows, true), [row], false);
            onSingleRowSelect && onSingleRowSelect(index, row, newSelectedRows);
            setSelectedRows(newSelectedRows);
        }
    };
    var handleSelectAllRow = function () {
        if (selectedRows.length >= dataList.length) {
            setSelectedRows([]);
            onRowSelect && onRowSelect([]);
        }
        else {
            var settingAllRowSelection = function (prev) {
                // const otherRows = dataList.filter((row) => !isSelected(row));
                // const newAllSelectedRows = [...prev, ...otherRows];
                // onRowSelect && onRowSelect(newAllSelectedRows);
                // return newAllSelectedRows;
                onRowSelect && onRowSelect(dataList);
                return dataList;
            };
            setSelectedRows(settingAllRowSelection);
        }
    };
    var handleSelectVisibleColumn = function () { };
    return (React.createElement(TableContext.Provider, { value: __assign(__assign({}, value), { selectedRows: selectedRows, setSelectedRows: setSelectedRows, handleRowClick: handleRowClick, handleSelectAllRow: handleSelectAllRow, isSelected: isSelected, isColumnVisible: isColumnVisible, visibleColumns: visibleColumns, setVisibleColumns: setVisibleColumns }) }, children));
};
export default TableContextProvider;
