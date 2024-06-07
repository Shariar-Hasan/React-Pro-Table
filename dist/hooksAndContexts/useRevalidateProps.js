import { useEffect } from "react";
import error from "../helper/error";
var useRevalidateProps = function (props) {
    var dataList = props.dataList, uniqueKeyAccessor = props.uniqueKeyAccessor, selectable = props.selectable, onError = props.onError, headers = props.headers, columnSettings = props.columnSettings;
    useEffect(function () {
        var dataListRevalidate = function () {
            if (selectable && !uniqueKeyAccessor) {
                var errorMessage = "RevalidationError : uniqueKeyAccessor is required when selectable is true";
                onError && onError(errorMessage);
                error(errorMessage);
                return;
            }
            if (uniqueKeyAccessor) {
                var uniqueFieldList_1 = dataList.map(function (item) { return item[uniqueKeyAccessor]; });
                var isNotUniqe = uniqueFieldList_1.some(function (item, index) { return uniqueFieldList_1.indexOf(item) !== index; });
                if (isNotUniqe) {
                    var errorMessage = "RevalidationError : uniqueKeyAccessor field is not unique in dataList";
                    onError && onError(errorMessage);
                    error(errorMessage);
                }
            }
        };
        var headerRevalidate = function () {
            if (columnSettings) {
                var uniqueFieldList_2 = headers.map(function (item) { return item["id"]; });
                var isNotUniqe = uniqueFieldList_2.some(function (item, index) { return uniqueFieldList_2.indexOf(item) !== index; });
                if (isNotUniqe) {
                    var errorMessage = "RevalidationError : columnSettings needs unique id field in  header props ";
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
