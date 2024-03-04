import { useState } from 'react'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      {show ? <ClassComponent/> : <FuncComponent/>}
      <button onClick={() => setShow(!show)}>Mostrar</button>
    </>
  )
}

export default App
