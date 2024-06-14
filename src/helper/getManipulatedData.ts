import { HeaderSingleItemType } from "../type/types";

export const getVisibleData = (
  dataList: any[],
  visibleColumns: HeaderSingleItemType[]
) => {
  return dataList.map((item) => {
    return visibleColumns.reduce((acc: any, column: HeaderSingleItemType) => {
      acc[column.accessor] = item[column.accessor];
      return acc;
    }, {});
  });
};
