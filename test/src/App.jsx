import Table from 'react-pro-table'
import './App.css'
import { dataList } from './datalist'
import { columns } from './column'

function App() {
  return (
    <>
      <div className="App container">
        <header className="App-header">
          <h1>React Pro Table Example</h1>
          <p>
            this code can be found in the <a href="https://github.com/Shariar-Hasan/react-pro-table/">test</a> folder
          </p>
        </header>
        <Table
          dataList={dataList}
          headers={columns}
          bordered
          responsive
          hoverable
          selectable
          uniqueKeyAccessor='id'
          selectAll
          columnSettings
          exportOptions={[{ exportType: 'json', fileName: 'data' }, {
            exportType: 'csv',
            fileName: 'data-csv',
          }, { exportType: 'csv' }]}
          onRowSelect={(selectedRows) => {
            console.log({ selectedRows })
          }}
          onSingleRowSelect={(rowIndex, row, selectedRows) => {
            console.log({ rowIndex, row, selectedRows })
          }}
          onError={(error) => {
            alert(error)
          }}
        />
      </div>

    </>
  )
}

export default App
