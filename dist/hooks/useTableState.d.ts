/// <reference types="react" />
declare const useTableState: () => {
    selectedRows: any[];
    setSelectedRows: import("react").Dispatch<import("react").SetStateAction<any[]>>;
    handleRowClick: (row: any, index: number) => void;
};
export default useTableState;
