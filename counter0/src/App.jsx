import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(5);

  const addvalue = ()=> {
    setcounter(counter + 1);
  }

  const removevalue = ()=> {
    setcounter(counter - 1);
  }


  return (
    <>
      <h1>yashraj</h1>
      <h3>counter value: {counter}</h3>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
