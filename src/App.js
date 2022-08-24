import './App.css';
import {useState} from 'react'


function App() {

let [val, setVal]= useState(0)

  return (
    <div id="container">
          <h1>{val}</h1>
          <button onClick={()=>setVal(num=>num+1)}>Add+1</button>
          <button onClick={()=>setVal(num=>num-1)}>Sub-1</button>
          <button onClick={()=>setVal(num=>num+10)}>Add+10</button>
          <button onClick={()=>setVal(num=>num-10)}>Sub-10</button>
    </div>
  )




}

export default App;