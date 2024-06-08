export const isBrowser = () => typeof window !== "undefined";
export const isString = (value: any): boolean => {
  return typeof value === "string";
};
export const downloadItNow = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const createUrl = (data: any, type: string) => {
  const blob = new Blob([data], { type });
  if (!isBrowser) return "";
  const url = window.URL.createObjectURL(blob);
  return url;
};

export const getCompressedPagination = (
  numOfPage: number,
  currentPage: number
) => {
  if (numOfPage <= 6)
    return Array.from({ length: numOfPage }).map((_, index) => index + 1);

  if (currentPage < 3 || currentPage > numOfPage - 2)
    return [1, 2, "...", numOfPage - 1, numOfPage];
  else
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      numOfPage,
    ];
};
