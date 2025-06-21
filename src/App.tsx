import { useState } from "react";
import "./App.css";
import { Button } from "./Button";

function App() {
  
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <Button label='Increase' onClick={increase} />
      <Button label='Decrease' onClick={decrease} />
      <Button label='Reset' onClick={reset} />
      <h1>{count}</h1>
    </>
  );
}

export default App;
