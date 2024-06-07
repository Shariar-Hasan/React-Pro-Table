import React, { useEffect, useState } from "react";
import {
  DatalistSingleItemType,
  HeaderSingleItemType,
  ITableProps,
} from "../type/types";
import error from "../helper/error";

const useRevalidateProps = (props: ITableProps) => {
  const {
    dataList,
    uniqueKeyAccessor,
    selectable,
    onError,
    headers,
    columnSettings,
  } = props;
  useEffect(() => {
    const dataListRevalidate = () => {
      if (selectable && !uniqueKeyAccessor) {
        const errorMessage =
          "RevalidationError : uniqueKeyAccessor is required when selectable is true";
        onError && onError(errorMessage);
        error(errorMessage);
        return;
      }
      if (uniqueKeyAccessor) {
        const uniqueFieldList = dataList.map(
          (item) => item[uniqueKeyAccessor as string]
        );
        const isNotUniqe = uniqueFieldList.some(
          (item, index) => uniqueFieldList.indexOf(item) !== index
        );
        if (isNotUniqe) {
          const errorMessage =
            "RevalidationError : uniqueKeyAccessor field is not unique in dataList";
          onError && onError(errorMessage);
          error(errorMessage);
        }
      }
    };
    const headerRevalidate = () => {
      if (columnSettings) {
        const uniqueFieldList = headers.map((item) => item["id"]);
        const isNotUniqe = uniqueFieldList.some(
          (item, index) => uniqueFieldList.indexOf(item) !== index
        );
        if (isNotUniqe) {
          const errorMessage =
            "RevalidationError : columnSettings needs unique id field in  header props ";
          onError && onError(errorMessage);
          error(errorMessage);
        }
      }
    };
    dataListRevalidate();
    headerRevalidate();
  }, [props]);
  return props;
};

export default useRevalidateProps;
