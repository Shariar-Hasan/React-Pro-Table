export default (message: string) => {
  throw new Error(message || "Internal Error");
};
