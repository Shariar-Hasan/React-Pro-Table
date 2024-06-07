import React from "react";
import { HeaderSingleItemType, TableExportOptionsType } from "../../type/types";
interface PropsType {
    exportOptions: TableExportOptionsType[];
    dataList: any;
    headers: HeaderSingleItemType[];
}
declare const ExportButtonList: ({ exportOptions, dataList, headers }: PropsType) => React.JSX.Element;
export default ExportButtonList;
