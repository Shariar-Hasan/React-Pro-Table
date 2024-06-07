"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/Table.tsx
var react_1 = __importStar(require("react"));
require("../global.css");
var shortHelpers_1 = require("./helper/shortHelpers");
var mainHelpers_1 = require("./helper/mainHelpers");
var Table = function (_a) {
    var 
    // common Props
    dataList = _a.dataList, headers = _a.headers, bordered = _a.bordered, exportOptions = _a.exportOptions, filterOptions = _a.filterOptions, hoverable = _a.hoverable, paginationOptions = _a.paginationOptions, selectAll = _a.selectAll, selectable = _a.selectable, striped = _a.striped, responsive = _a.responsive, 
    // events
    onFiltering = _a.onFiltering, onRowExporting = _a.onRowExporting, onRowHover = _a.onRowHover, onRowSelect = _a.onRowSelect, onSortClick = _a.onSortClick;
    var tableRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        adjustColumnWidths();
        window.addEventListener("resize", adjustColumnWidths);
        return function () { return window.removeEventListener("resize", adjustColumnWidths); };
    }, []);
    var adjustColumnWidths = function () {
        var table = tableRef.current;
        if (!table)
            return;
        var rows = table.querySelectorAll(".row");
        var maxWidths = [];
        rows.forEach(function (row) {
            var cells = row.querySelectorAll(".column");
            cells.forEach(function (cell, index) {
                var contentWidth = cell.scrollWidth;
                maxWidths[index] = Math.max(maxWidths[index] || 0, contentWidth);
            });
        });
        // rows.forEach((row) => {
        //   const cells = row.querySelectorAll(".column");
        //   cells.forEach((cell, index) => {
        //     cell.style.width = `${maxWidths[index]}px`;
        //   });
        // });
    };
    return (react_1.default.createElement("div", { className: "table__body" },
        react_1.default.createElement("div", { className: "table__top" },
            exportOptions && (react_1.default.createElement("button", { onClick: function () { return (0, mainHelpers_1.exportAsJson)(dataList); } }, "Export as Json")),
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum provident odit dolor rem repellat ut nihil aut! Dicta, sit earum?"),
        react_1.default.createElement("div", { className: "table__wrpper table__responsive ".concat(responsive ? "table__responsive" : "") },
            react_1.default.createElement("div", { className: "table__table", ref: tableRef },
                react_1.default.createElement("div", { className: "table__header table__row ".concat(bordered ? "bordered" : "") }, headers.map(function (header, index) { return (react_1.default.createElement("div", { className: "table__column", key: index }, header.title)); })),
                react_1.default.createElement(react_1.default.Fragment, null, dataList.map(function (item, index) { return (react_1.default.createElement("div", { className: "table__row bordered", key: index }, headers.map(function (header, index) { return (react_1.default.createElement("div", { className: "table__column", key: index }, (0, shortHelpers_1.showValue)(header, item))); }))); }))))));
};
exports.default = Table;
