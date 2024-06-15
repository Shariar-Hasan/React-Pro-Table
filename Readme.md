# React Pro Table

React-Pro-Table is a versatile and responsive table component for React applications. It offers advanced functionalities such as sorting, filtering (on test), pagination, and customizable styling options, making it ideal for displaying and manipulating large datasets.

### Getting Started

Welcome to `react-pro-table`! This guide will help you get up and running quickly with our table component.

#### Installation

Install the package using npm or yarn:

```bash
npm install react-pro-table
```

#### Basic Usage

Import the `Table` component and use it in your React application:

```javascript
import React from 'react';
import Table from 'react-pro-table';

const MyDataTable = () => {

  return (
    <div>
      <h2>My Data Table</h2>
          <Table {{
        dataList: [
          { id: 1, name: 'John Doe', age: 28 },
          { id: 2, name: 'Jane Smith', age: 32 },
        ],
        headers: [
          { accessor: 'id', title: 'ID' },
          { accessor: 'name', title: 'Name' },
          { accessor: 'age', title: 'Age' },
        ],
        striped: true,
        bordered: true,
        selectable: true,
      }} />
    </div>
  );
};

export default MyDataTable;
```
> __Note__:
> There are many different kinds of configuration that can be used to configure the table in different ways.
For a detailed guide and advanced configuration options, please visit our [GitHub Wiki](https://github.com/Shariar-Hasan/react-pro-table/wiki).
