import Table from 'react-pro-table'
import './App.css'
import { dataList } from './datalist'
import { columns } from './column'
import { useEffect, useState } from 'react';
import logo from "./assets/logo-300.png"
function App() {
  const [dataListItems, setDataListItems] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortProps, setSortProps] = useState({ order: '', orderBy: '' });
  const [filters, setFilters] = useState({ type: '', accessor: '', value: '' });
  useEffect(() => {
    const newDataList = dataList
      .map((item) => ({ ...item, id: parseInt(item.id, 10) }))
      .sort((a, b) => {
        console.log({ sortProps, bby: b[sortProps.orderBy] - a[sortProps.orderBy], aby: a[sortProps.orderBy] - b[sortProps.orderBy] })
        if (sortProps.order === "dec") {
          if (a[sortProps.orderBy] > b[sortProps.orderBy]) return -1;
          else return 1;
        } else if (sortProps.order === "asc") {
          if (a[sortProps.orderBy] < b[sortProps.orderBy]) return 1;
          else return -1;
        }
        return 0

      })
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
    console.log({ newDataList, filters })
    setDataListItems(newDataList)
  }, [page, itemsPerPage, sortProps, filters])
  return (
    <>
      <div className="App container">
        <div className="">
          <img src={logo} alt={"React Pro Table Logo"} style={{
            width: 200,
            height: 200,
          }} />
        </div>
        <header className="App-header">
          <h1>React Pro Table Example</h1>
          <p>
            this code can be found in the <a href="https://github.com/Shariar-Hasan/react-pro-table/">test</a> folder
          </p>
        </header>
        <Table
          dataList={dataListItems}
          headers={columns}
          bordered
          responsive
          hoverable
          selectable
          uniqueKeyAccessor='id'
          selectAll
          columnSettings
          paginationOptions={
            {
              itemsPerPageList: [5, 10, 15, 20, 30, 40],
              totalItems: dataList.length,
              defaultCurrentPage: 2,
              defaultItemsPerPage: 3,
              showResultsCounts: true,
              showSkipToPageButton: true,
              showCompressedButtons: true,
            }
          }
          exportOptions={[{ exportType: 'json', fileName: 'data' }, {
            exportType: 'csv',
            fileName: 'data-csv',
          }, { exportType: 'csv' }]}

          // event sections
          onRowSelect={(selectedRows) => {
            console.log({ selectedRows })
          }}
          onSingleRowSelect={(rowIndex, row, selectedRows) => {
            console.log({ rowIndex, row, selectedRows })
          }}
          onError={(error) => {
            alert(error)
          }}
          onPaginationChange={(page, itemsPerPage) => {
            setPage(page)
            setItemsPerPage(itemsPerPage)
          }}
          onSort={(order, orderBy) => {
            setSortProps({ order, orderBy })
          }}
          onFiltering={(type, accessor, value) => {
            setFilters({ type, accessor, value })
          }}
        />
      </div>

    </>
  )
}

export default App
