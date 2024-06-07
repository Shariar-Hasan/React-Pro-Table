export default (function (message) {
    throw new Error(message || "Internal Error");
});
