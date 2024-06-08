export var isBrowser = function () { return typeof window !== "undefined"; };
export var isString = function (value) {
    return typeof value === "string";
};
export var downloadItNow = function (url, fileName) {
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
export var createUrl = function (data, type) {
    var blob = new Blob([data], { type: type });
    if (!isBrowser)
        return "";
    var url = window.URL.createObjectURL(blob);
    return url;
};
export var getCompressedPagination = function (numOfPage, currentPage) {
    if (numOfPage <= 6)
        return Array.from({ length: numOfPage }).map(function (_, index) { return index + 1; });
    if (currentPage < 3 || currentPage > numOfPage - 2)
        return [1, 2, "...", numOfPage - 1, numOfPage];
    else
        return [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            numOfPage,
        ];
};
