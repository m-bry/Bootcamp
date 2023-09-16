//import './App.css'

//function /*App*/() {
//
//  return (
//    <>
//    <p>Hello World!</p>
//    </>
//  )
//}
//
//export { /*App*/ }
import './App.css'
import Garfield from './components/Garfield.jsx'

function App() {
  const feelingsArray = ['Hungry', 'Determined'];
  return (
    <div>
      {}
      <Garfield feelings={feelingsArray} />
    </div>
  )
}

export default App