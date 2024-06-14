import React from "react";
import { TableSingleExportType } from "../../type/types";
declare const ExportButton: ({ type, fileName, }: {
    type: TableSingleExportType;
    fileName?: string;
}) => React.JSX.Element;
export default ExportButton;
