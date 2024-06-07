interface ITableProps {
    dataList: {
        [key: string]: string;
    }[];
    columns: {
        title: string;
        accessor: (row: any) => any | string;
        sortable?: boolean | string;
    }[];
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    className?: string;
}
