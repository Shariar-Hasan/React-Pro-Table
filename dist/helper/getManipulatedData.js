export var getVisibleData = function (dataList, visibleColumns) {
    return dataList.map(function (item) {
        return visibleColumns.reduce(function (acc, column) {
            acc[column.accessor] = item[column.accessor];
            return acc;
        }, {});
    });
};
