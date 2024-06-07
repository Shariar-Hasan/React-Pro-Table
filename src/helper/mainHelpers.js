"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportAsJson = void 0;
var moment_1 = __importDefault(require("moment"));
var shortHelpers_1 = require("./shortHelpers");
var exportAsJson = function (data, fileName) {
    var downloadableFileName = fileName
        ? "".concat(fileName, ".json")
        : "RPT-Json-".concat((0, moment_1.default)().format("YYYY-MM-dd-hh-mm-ss"), ".json");
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    (0, shortHelpers_1.downloadItNow)(url, downloadableFileName);
};
exports.exportAsJson = exportAsJson;
