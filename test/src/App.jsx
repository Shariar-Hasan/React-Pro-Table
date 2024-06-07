import Table from 'react-pro-table'
import './App.css'
import { dataList } from './datalist'
import { columns } from './column'

function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React Pro Table</h1>
        </header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Table
          dataList={dataList}
          headers={columns}
          bordered
          responsive
          exportOptions={[{ exportType: 'json', fileName: 'data' }, {
            exportType: 'csv',
            fileName: 'data-csv',
          }]}
        />
      </div>

    </>
  )
}

export default App
