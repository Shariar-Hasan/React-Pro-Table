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
  useEffect(() => {
    const newDataList = dataList.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    setDataListItems(newDataList)
  }, [page, itemsPerPage])
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
        />
      </div>

    </>
  )
}

export default App
