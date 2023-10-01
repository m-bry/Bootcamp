import { useState } from 'react'
import Child from './Child'

function Parent(){
  const [ name, setName ] = useState('');
  const handleChange = () =>{setName(e=> e.target.value);}
  return (
    <div>
      <h1>Hello {name}</h1>
      <Child value={handleChange}/>
    </div>
  )
}

export default Parent
//I have no clue