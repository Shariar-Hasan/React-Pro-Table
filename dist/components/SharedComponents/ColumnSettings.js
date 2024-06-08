var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import { MdSettings } from "react-icons/md";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var ColumnSettings = function () {
    var _a = useTableProps(), headers = _a.headers, visibleColumns = _a.visibleColumns, setVisibleColumns = _a.setVisibleColumns, isColumnVisible = _a.isColumnVisible;
    return (React.createElement("div", null,
        React.createElement("button", { className: "table__settings-button" },
            React.createElement("div", { className: "table__settings-menu" }, headers.map(function (header, index) { return (React.createElement("label", { key: index, style: { width: "100px" } },
                React.createElement("input", { type: "checkbox", width: 20, height: 20, style: {
                        display: "inline-block",
                    }, checked: isColumnVisible(header), onChange: function (e) {
                        if (e.target.checked) {
                            setVisibleColumns(function (prev) { return __spreadArray(__spreadArray([], prev, true), [header], false); });
                        }
                        else {
                            if (visibleColumns.length > 1)
                                setVisibleColumns(function (prev) {
                                    return prev.filter(function (item) { return item.id !== header.id; });
                                });
                        }
                    } }),
                header.title)); })),
            React.createElement(MdSettings, null))));
};
export default ColumnSettings;
