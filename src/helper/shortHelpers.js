"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showValue = exports.downloadItNow = exports.isString = void 0;
var isString = function (value) {
    return typeof value === "string";
};
exports.isString = isString;
var downloadItNow = function (url, fileName) {
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
exports.downloadItNow = downloadItNow;
var showValue = function (header, item) {
    return (0, exports.isString)(header.accessor)
        ? item[header.accessor]
        : header.accessor(item);
};
exports.showValue = showValue;
