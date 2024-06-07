export const columns = [
  { title: "ID", render: (row) => row.id, accessor: "id", sortable: true },
  {
    title: "First Name",
    render: (row) => row.firstName,
    accessor: "firstName",
    sortable: true,
  },
  {
    title: "Last Name",
    render: (row) => row.lastName,
    accessor: "lastName",
    sortable: true,
  },
  {
    title: "Email",
    render: (row) => row.email,
    accessor: "email",
    sortable: true,
  },
  {
    title: "Phone",
    render: (row) => row.phone,
    accessor: "phone",
    sortable: true,
  },
  {
    title: "Address",
    render: (row) => row.address,
    accessor: "address",
    sortable: true,
  },
  {
    title: "City",
    render: (row) => row.city,
    accessor: "city",
    sortable: true,
  },
  {
    title: "State",
    render: (row) => row.state,
    accessor: "state",
    sortable: true,
  },
  {
    title: "Country",
    render: (row) => row.country,
    accessor: "country",
    sortable: true,
  },
  {
    title: "Zip Code",
    render: (row) => row.zipCode,
    accessor: "zipCode",
    sortable: true,
  },
];
