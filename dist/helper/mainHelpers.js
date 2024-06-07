var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import moment from "moment";
import { createUrl, downloadItNow } from "./shortHelpers";
export var exportAsJson = function (data, fileName) {
    var downloadableFileName = fileName
        ? "".concat(fileName, ".json")
        : "RPT-Json-".concat(moment().format("YYYY-MM-dd-hh-mm-ss"), ".json");
    var jsonData = JSON.stringify(data, null, 2);
    var url = createUrl([jsonData], "application/json");
    downloadItNow(url, downloadableFileName);
};
export var exportAsCsv = function (header, data, fileName) {
    var downloadableFileName = fileName
        ? "".concat(fileName, ".csv")
        : "RPT-Csv-".concat(moment().format("YYYY-MM-dd-hh-mm-ss"), ".csv");
    var headings = header.map(function (h) { return h.title; }).join(",");
    var row = data.map(function (item) { return header.map(function (h) { return item[h.accessor]; }).join(","); });
    var finalResult = __spreadArray([headings], row, true).join("\n");
    var url = createUrl([finalResult], "text/csv");
    downloadItNow(url, downloadableFileName);
};
