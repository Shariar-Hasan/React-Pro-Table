var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState } from "react";
var useTableState = function () {
    var _a = useState([]), selectedRows = _a[0], setSelectedRows = _a[1];
    // common functions
    var handleRowClick = function (row, index) {
        if (selectedRows.includes(row)) {
            setSelectedRows(function (prev) { return prev.filter(function (item) { return item !== row; }); });
        }
        else {
            setSelectedRows(__spreadArray(__spreadArray([], selectedRows, true), [row], false));
        }
    };
    return { selectedRows: selectedRows, setSelectedRows: setSelectedRows, handleRowClick: handleRowClick };
};
export default useTableState;
