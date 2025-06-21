import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { LightButton } from "./LightButton";

function App() {
  //Count Component Logic

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  //TrafficLight Logic

  const [color, setColor] = useState("");

  function changeColor(color: string) {
    setColor(color);
  }

  return (
    <>
      <h1>Lifting Up State Exercises</h1>
      <div>
        <h2>Counter</h2>
        <Button label="Increase" onClick={increase} />
        <Button label="Decrease" onClick={decrease} />
        <Button label="Reset" onClick={reset} />
        <h3>{count}</h3>
      </div>
      <div>
        <h2>TrafficLigth</h2>
        <LightButton label={"green"} onClick={changeColor} />
        <LightButton label={"orange"} onClick={changeColor} />
        <LightButton label={"red"} onClick={changeColor} />
        <h3>{color === 'red' ? '🔴' : color === 'orange' ? '🟠' : '🟢'}</h3>
      </div>
    </>
  );
}

export default App;
