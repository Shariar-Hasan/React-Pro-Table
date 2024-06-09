import React, { useEffect, useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight, } from "react-icons/lu";
import { getCompressedPagination } from "../../helper/shortHelpers";
var PaginationFooter = function () {
    var _a = useTableProps(), paginationOptions = _a.paginationOptions, onPaginationChange = _a.onPaginationChange, dataList = _a.dataList, setSelectedRows = _a.setSelectedRows;
    return (paginationOptions &&
        (function () {
            var itemsPerPageList = paginationOptions.itemsPerPageList, totalItems = paginationOptions.totalItems, defaultCurrentPage = paginationOptions.defaultCurrentPage, defaultItemsPerPage = paginationOptions.defaultItemsPerPage, showCompressedButtons = paginationOptions.showCompressedButtons, _a = paginationOptions.showResultsCounts, showResultsCounts = _a === void 0 ? true : _a, showSkipToPageButton = paginationOptions.showSkipToPageButton;
            var _b = useState(defaultCurrentPage || 1), currentPage = _b[0], setCurrentPage = _b[1];
            var _c = useState(defaultItemsPerPage || itemsPerPageList[0]), currentItemsPerPage = _c[0], setCurrentItemsPerPage = _c[1];
            var _d = useState(Math.ceil(totalItems / currentItemsPerPage)), numOfPages = _d[0], setNumOfPages = _d[1];
            useEffect(function () {
                onPaginationChange &&
                    onPaginationChange(currentPage, currentItemsPerPage);
                setSelectedRows([]);
            }, [currentPage, currentItemsPerPage]);
            var handlePageChange = function (page) {
                setCurrentPage(page);
            };
            var handleItemsPerPageChange = function (itemsPerPage) {
                setNumOfPages(Math.ceil(totalItems / itemsPerPage));
                setCurrentItemsPerPage(itemsPerPage);
                setCurrentPage(1);
            };
            return (React.createElement("div", { className: "rpt__pagination-footer" },
                React.createElement(FooterPaginationLeft, { showResultsCounts: showResultsCounts, currentItemsPerPage: currentItemsPerPage, totalItems: totalItems, currentPage: currentPage }),
                React.createElement(FooterPaginationMiddle, { currentPage: currentPage, handlePageChange: handlePageChange, numOfPages: numOfPages, showSkipToPageButton: !!showSkipToPageButton, showCompressedButtons: !!showCompressedButtons }),
                React.createElement(FooterPaginationRight, { currentItemsPerPage: currentItemsPerPage, handleItemsPerPageChange: handleItemsPerPageChange, itemsPerPageList: itemsPerPageList })));
        })());
};
var FooterPaginationLeft = function (_a) {
    var showResultsCounts = _a.showResultsCounts, currentPage = _a.currentPage, currentItemsPerPage = _a.currentItemsPerPage, totalItems = _a.totalItems;
    return (React.createElement("div", { className: "rpt__pagination-footer-left" }, showResultsCounts && (React.createElement("p", null,
        "Showing ",
        (currentPage - 1) * currentItemsPerPage + 1,
        " to",
        " ",
        currentPage * currentItemsPerPage > totalItems
            ? totalItems
            : currentPage * currentItemsPerPage,
        " ",
        "of ",
        totalItems,
        " entries"))));
};
var FooterPaginationMiddle = function (_a) {
    var currentPage = _a.currentPage, handlePageChange = _a.handlePageChange, numOfPages = _a.numOfPages, showSkipToPageButton = _a.showSkipToPageButton, showCompressedButtons = _a.showCompressedButtons;
    return (React.createElement("div", { className: "rpt__pagination-footer-middle" },
        React.createElement("div", null,
            showSkipToPageButton && (React.createElement("button", { onClick: function () { return handlePageChange(1); }, disabled: currentPage <= 1 },
                React.createElement(LuChevronsLeft, null))),
            React.createElement("button", { onClick: function () {
                    return handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage);
                }, disabled: currentPage <= 1 },
                React.createElement(LuChevronLeft, null)),
            React.createElement(FullFunctionalPagination, { currentPage: currentPage, handlePageChange: handlePageChange, numOfPages: numOfPages, showCompressedButtons: showCompressedButtons }),
            React.createElement("button", { onClick: function () {
                    return handlePageChange(currentPage < numOfPages ? currentPage + 1 : currentPage);
                }, disabled: currentPage >= numOfPages },
                React.createElement(LuChevronRight, null)),
            showSkipToPageButton && (React.createElement("button", { onClick: function () { return handlePageChange(numOfPages); }, disabled: currentPage >= numOfPages },
                React.createElement(LuChevronsRight, null))))));
};
var FooterPaginationRight = function (_a) {
    var currentItemsPerPage = _a.currentItemsPerPage, handleItemsPerPageChange = _a.handleItemsPerPageChange, itemsPerPageList = _a.itemsPerPageList;
    return (React.createElement("div", { className: "rpt__pagination-footer-right" },
        React.createElement("div", { className: "rpt__pagination-itemPerPage-wrapper", tabIndex: 1 },
            React.createElement("button", { className: "rpt__pagination-itemPerPage-btn" }, currentItemsPerPage),
            " ",
            "rows per page",
            React.createElement("div", { className: "rpt__pagination-itemPerPage-list" }, itemsPerPageList.map(function (itemPerPage, index) { return (React.createElement("button", { key: index, onClick: function () { return handleItemsPerPageChange(itemPerPage); }, disabled: currentItemsPerPage === itemPerPage }, itemPerPage)); })))));
};
var FullFunctionalPagination = function (_a) {
    var numOfPages = _a.numOfPages, currentPage = _a.currentPage, handlePageChange = _a.handlePageChange, showCompressedButtons = _a.showCompressedButtons;
    var _b = useState(getCompressedPagination(numOfPages, currentPage)), compressedPaginations = _b[0], setCompressedPaginations = _b[1];
    useEffect(function () {
        // compressed pagination : 1 2 ... 4 5 6 ... 9 10
        setCompressedPaginations(getCompressedPagination(numOfPages, currentPage));
    }, [currentPage, numOfPages]);
    var handleCompressedPagination = function (item, index) {
        if (item !== "...") {
            handlePageChange(item);
        }
        else {
            if (index === 2) {
                if (currentPage < 3)
                    handlePageChange(3);
                else
                    handlePageChange(numOfPages - 2);
            }
            else if (index === 1) {
                handlePageChange(currentPage - 2);
            }
            else {
                handlePageChange(currentPage + 2);
            }
        }
    };
    if (showCompressedButtons) {
        return compressedPaginations.map(function (item, index) { return (React.createElement("button", { key: index, className: "".concat(currentPage === item ? "selected" : ""), onClick: function () { return handleCompressedPagination(item, index); }, disabled: item !== "..." && currentPage === item }, item)); });
    }
    else {
        return Array.from({
            length: numOfPages,
        }).map(function (_, index) { return (React.createElement("button", { key: index, className: "".concat(currentPage === index + 1 ? "selected" : ""), onClick: function () { return handlePageChange(index + 1); }, disabled: currentPage === index + 1 }, index + 1)); });
    }
};
export default PaginationFooter;
