import React, { useEffect, useState } from "react";
import { useTableProps } from "../../hooksAndContexts/TableContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { getCompressedPagination } from "../../helper/shortHelpers";

const PaginationFooter = () => {
  const { paginationOptions, onPaginationChange, dataList, setSelectedRows } =
    useTableProps();

  return (
    paginationOptions &&
    (() => {
      const {
        itemsPerPageList,
        totalItems,
        defaultCurrentPage,
        defaultItemsPerPage,
        showCompressedButtons,
        showResultsCounts = true,
        showSkipToPageButton,
      } = paginationOptions;
      const [currentPage, setCurrentPage] = useState(defaultCurrentPage || 1);
      const [currentItemsPerPage, setCurrentItemsPerPage] = useState(
        defaultItemsPerPage || itemsPerPageList[0]
      );
      const [numOfPages, setNumOfPages] = useState(
        Math.ceil(totalItems / currentItemsPerPage)
      );
      useEffect(() => {
        onPaginationChange &&
          onPaginationChange(currentPage, currentItemsPerPage);
        setSelectedRows([]);
      }, [currentPage, currentItemsPerPage]);

      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };

      const handleItemsPerPageChange = (itemsPerPage: number) => {
        setNumOfPages(Math.ceil(totalItems / itemsPerPage));
        setCurrentItemsPerPage(itemsPerPage);
        setCurrentPage(1);
      };
      return (
        <div className="rpt__pagination-footer">
          <FooterPaginationLeft
            showResultsCounts={showResultsCounts}
            currentItemsPerPage={currentItemsPerPage}
            totalItems={totalItems}
            currentPage={currentPage}
          />
          <FooterPaginationMiddle
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            numOfPages={numOfPages}
            showSkipToPageButton={!!showSkipToPageButton}
            showCompressedButtons={!!showCompressedButtons}
          />
          <FooterPaginationRight
            currentItemsPerPage={currentItemsPerPage}
            handleItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPageList={itemsPerPageList}
          />
        </div>
      );
    })()
  );
};
const FooterPaginationLeft = ({
  showResultsCounts,
  currentPage,
  currentItemsPerPage,
  totalItems,
}: {
  showResultsCounts: boolean;
  currentPage: number;
  currentItemsPerPage: number;
  totalItems: number;
}) => {
  return (
    <div className="rpt__pagination-footer-left">
      {showResultsCounts && (
        <p>
          Showing {(currentPage - 1) * currentItemsPerPage + 1} to{" "}
          {currentPage * currentItemsPerPage > totalItems
            ? totalItems
            : currentPage * currentItemsPerPage}{" "}
          of {totalItems} entries
        </p>
      )}
    </div>
  );
};
const FooterPaginationMiddle = ({
  currentPage,
  handlePageChange,
  numOfPages,
  showSkipToPageButton,
  showCompressedButtons,
}: {
  currentPage: number;
  handlePageChange: (page: number) => void;
  numOfPages: number;
  showSkipToPageButton: boolean;
  showCompressedButtons: boolean;
}) => {
  return (
    <div className="rpt__pagination-footer-middle">
      <div>
        {/* pagination buttons */}
        {showSkipToPageButton && (
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage <= 1}
          >
            <LuChevronsLeft />
          </button>
        )}

        <button
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)
          }
          disabled={currentPage <= 1}
        >
          <LuChevronLeft />
        </button>
        <FullFunctionalPagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          numOfPages={numOfPages}
          showCompressedButtons={showCompressedButtons}
        />

        <button
          onClick={() =>
            handlePageChange(
              currentPage < numOfPages ? currentPage + 1 : currentPage
            )
          }
          disabled={currentPage >= numOfPages}
        >
          <LuChevronRight />
        </button>
        {showSkipToPageButton && (
          <button
            onClick={() => handlePageChange(numOfPages)}
            disabled={currentPage >= numOfPages}
          >
            <LuChevronsRight />
          </button>
        )}
      </div>
    </div>
  );
};
const FooterPaginationRight = ({
  currentItemsPerPage,
  handleItemsPerPageChange,
  itemsPerPageList,
}: {
  currentItemsPerPage: number;
  handleItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageList: number[];
}) => {
  return (
    <div className="rpt__pagination-footer-right">
      <div className="rpt__pagination-itemPerPage-wrapper" tabIndex={1}>
        <button className="rpt__pagination-itemPerPage-btn">
          {currentItemsPerPage}
        </button>{" "}
        rows per page
        <div className="rpt__pagination-itemPerPage-list">
          {itemsPerPageList.map((itemPerPage, index) => (
            <button
              key={index}
              onClick={() => handleItemsPerPageChange(itemPerPage)}
              disabled={currentItemsPerPage === itemPerPage}
            >
              {itemPerPage}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const FullFunctionalPagination = ({
  numOfPages,
  currentPage,
  handlePageChange,
  showCompressedButtons,
}: {
  numOfPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  showCompressedButtons: boolean;
}) => {
  const [compressedPaginations, setCompressedPaginations] = useState(
    getCompressedPagination(numOfPages, currentPage)
  );
  useEffect(() => {
    // compressed pagination : 1 2 ... 4 5 6 ... 9 10
    setCompressedPaginations(getCompressedPagination(numOfPages, currentPage));
  }, [currentPage, numOfPages]);


  const handleCompressedPagination = (item: string | number, index: number) => {
    if (item !== "...") {
      handlePageChange(item as number);
    } else {
      if (index === 2) {
        if (currentPage < 3) handlePageChange(3);
        else handlePageChange(numOfPages - 2);
      } else if (index === 1) {
        handlePageChange(currentPage - 2);
      } else {
        handlePageChange(currentPage + 2);
      }
    }
  };

  if (showCompressedButtons) {
    return compressedPaginations.map((item, index) => (
      <button
        key={index}
        className={`${currentPage === item ? "selected" : ""}`}
        onClick={() => handleCompressedPagination(item, index)}
        disabled={item !== "..." && currentPage === item}
      >
        {item}
      </button>
    ));
  } else {
    return Array.from({
      length: numOfPages,
    }).map((_, index) => (
      <button
        key={index}
        className={`${currentPage === index + 1 ? "selected" : ""}`}
        onClick={() => handlePageChange(index + 1)}
        disabled={currentPage === index + 1}
      >
        {index + 1}
      </button>
    ));
  }
};
export default PaginationFooter;
