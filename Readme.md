# React Pro Table

## Introduction

`react-pro-table` is a powerful and flexible table component for React applications, designed to handle various data visualization and manipulation needs. It offers features like sorting, filtering, pagination, and export options.

## Installation

To use this component in your React project, you can install it via npm or yarn:

```bash
npm install react-pro-table
# or
yarn add react-pro-table
```

## Usage

### Basic Usage

```jsx
import React from "react";
import ProTable from "react-pro-table";

const MyComponent = () => {
  // Define your table data and headers
  const dataList = [
    /* Your data array */
  ];
  const headers = [
    /* Your column headers array */
  ];

  return (
    <ProTable
      dataList={dataList}
      headers={headers}
      // Additional props and event handlers
    />
  );
};

export default MyComponent;
```

### Tables Props

| Props Name        | Description                                                                  | Type    |
| ------ | ------- | ------- |
| dataList          | Array of objects representing the table data.                                | Array   |
| headers           | Array of objects defining column headers.                                    | Array   |
| striped           | (Optional) Boolean to enable striped rows.                                   | Boolean |
| bordered          | (Optional) Boolean to enable bordered rows.                                  | Boolean |
| hoverable         | (Optional) Boolean to enable row hover effect.                               | Boolean |
| selectable        | (Optional) Boolean to enable row selection.                                  | Boolean |
| selectAll         | (Optional) Boolean to enable selecting all rows.                             | Boolean |
| exportOptions     | (Optional) Array of string options for export formats (e.g., 'json', 'csv'). | Array   |
| filterOptions     | (Optional) Array of objects defining filter options for columns.             | Array   |
| paginationOptions | (Optional) Object defining pagination settings.                              | Object  |
| responsive        | (Optional) Boolean to enable table responsiveness.                           | Boolean |

### Event Handlers

| Event          | Description                   | Type     |
| -------------- | ----------------------------- | -------- |
| onSortClick    | Handle sort click event.      | Function |
| onRowHover     | Handle row hover event.       | Function |
| onRowSelect    | Handle row select event.      | Function |
| onRowExporting | Handle row exporting event.   | Function |
| onFiltering    | Handle table filtering event. | Function |

Please let me know if this formatting meets your requirements, or if there's anything else you'd like to adjust!

### Styling

You can customize the table appearance by adding CSS classes. Here are some common classes:

```css
/* Top section of the table */
.table__top {
  /* Your styles */
}

/* Table wrapper */
.table__wrapper {
  /* Your styles */
}

/* Responsive table wrapper */
.table__wrapper.table__responsive {
  /* Your styles */
}

/* Main table */
.table__table {
  /* Your styles */
}

/* Table row */
.table__row {
  /* Your styles */
}

/* Table header */
.table__header {
  /* Your styles */
}

/* Bordered table row */
.table__row.bordered::after {
  /* Your styles */
}

/* Table column */
.table__column {
  /* Your styles */
}
```

---

Feel free to customize this README further to include additional information or styling instructions as needed for your component.
