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
