import { useState } from 'react'
import './App.css'
import { Button } from './Button'

function App() {

  const [count, setCount] = useState(0)

  function increase(){
    setCount(count + 1)
  }

  return (
    <>
      < Button aumentar = {increase}/>
      <h1>{count}</h1>
    </>
  )
}

export default App
