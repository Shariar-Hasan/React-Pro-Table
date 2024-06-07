import React, { useEffect, useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
var Checkbox = function (_a) {
    var item = _a.item, checkAll = _a.checkAll;
    var _b = useTableProps(), dataList = _b.dataList, selectedRows = _b.selectedRows, handleSelectAllRow = _b.handleSelectAllRow, uniqueKeyAccessor = _b.uniqueKeyAccessor;
    var _c = useState(), isChecked = _c[0], setIsChecked = _c[1];
    useEffect(function () {
        var newIsChecked = (item &&
            selectedRows
                .map(function (r) { return r[uniqueKeyAccessor]; })
                .includes(item[uniqueKeyAccessor])) ||
            selectedRows.length >= dataList.length;
        setIsChecked(newIsChecked);
        // console.log({ item });
    }, [selectedRows]);
    return (React.createElement("span", { className: "table__checkbox ".concat(isChecked ? "checked" : ""), onClick: function () {
            console.log({ checkAll: checkAll });
            checkAll
                ? handleSelectAllRow()
                : function () {
                    return;
                };
        } })
    // <input
    //   type="checkbox"
    //   style={{
    //     width: "15px",
    //     height: "15px",
    //   }}
    //   readOnly
    //   checked={selectedRows?.includes(item)}
    // />
    );
};
export default Checkbox;
