import { useState } from 'react'
import './App.css'
import Table from './components/Table.jsx'

function App() {
  const [tableData, setTableData] = useState([])
  // const [data, setData] = useState([])
//   const dataGrab = () => {
//   const endpoint = `https://swapi.dev/api/people/`
//   fetch(endpoint)
//   .then(response => {
//     return response.json()
//   })
//   .then((resResult) => {
//     setData(resResult.results)
//   })
//   .catch(error => {
//     console.log(`Error coming from API: `. error);
//   })
// }
  const endpoint = `https://swapi.dev/api/people/`
  fetch(endpoint)
  .then(response => {
    return response.json();
  })
  .then(responseData => {
    setTableData(responseData.results)
  })
  return (
    <div>
      <Table data={tableData} />
    </div>
  )
}

export default App
