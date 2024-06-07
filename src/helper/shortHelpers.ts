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
