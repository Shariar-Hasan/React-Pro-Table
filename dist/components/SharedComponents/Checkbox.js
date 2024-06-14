import React, { useEffect, useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var Checkbox = function (_a) {
    var item = _a.item, checkAll = _a.checkAll, onClick = _a.onClick;
    var _b = useTableProps(), dataList = _b.dataList, selectedRows = _b.selectedRows, handleSelectAllRow = _b.handleSelectAllRow, uniqueKeyAccessor = _b.uniqueKeyAccessor;
    var _c = useState(), isChecked = _c[0], setIsChecked = _c[1];
    useEffect(function () {
        var newIsChecked = (item &&
            selectedRows
                .map(function (r) { return r[uniqueKeyAccessor]; })
                .includes(item[uniqueKeyAccessor])) ||
            (selectedRows.length >= dataList.length && dataList.length > 0);
        setIsChecked(newIsChecked);
    }, [selectedRows]);
    return (React.createElement("span", { className: "rpt__checkbox ".concat(isChecked ? "checked" : ""), onClick: function () {
            checkAll ? handleSelectAllRow() : onClick && onClick();
        } }));
};
export default Checkbox;
