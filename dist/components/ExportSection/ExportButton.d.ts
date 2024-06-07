import React from "react";
import { HeaderSingleItemType, TableSingleExportType } from "../../type/types";
declare const ExportButton: ({ type, headers, dataList, fileName, }: {
    type: TableSingleExportType;
    headers: HeaderSingleItemType[];
    dataList: any;
    fileName?: string;
}) => React.JSX.Element;
export default ExportButton;
