import moment from "moment";
import { createUrl, downloadItNow } from "./shortHelpers";
import { HeaderSingleItemType } from "../type/types";

export const exportAsJson = (data: any[], fileName?: string) => {
  const downloadableFileName = fileName
    ? `${fileName}.json`
    : `RPT-Json-${moment().format("YYYY-MM-dd-hh-mm-ss")}.json`;
  const jsonData = JSON.stringify(data, null, 2);
  const url = createUrl([jsonData], "application/json");
  downloadItNow(url, downloadableFileName);
};
export const exportAsCsv = (
  header: HeaderSingleItemType[],
  data: any[],
  fileName?: string
) => {
  const downloadableFileName = fileName
    ? `${fileName}.csv`
    : `RPT-Csv-${moment().format("YYYY-MM-dd-hh-mm-ss")}.csv`;
  const headings = header.map((h) => h.title).join(",");
  const row = data.map((item) => header.map((h) => item[h.accessor]).join(","));
  const finalResult = [headings, ...row].join("\n");
  const url = createUrl([finalResult], "text/csv");
  downloadItNow(url, downloadableFileName);
};
