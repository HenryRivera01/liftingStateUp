import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { LightButton } from "./LightButton";
import { StudentLists } from "./StudentLists";
import type { Student } from "./StudentLists";
import { StudentDetails } from "./StudentDetails";

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

  //StudentsList Logic

  const students: Student[] = [
    { id: 1, name: "Henry", age: 24, rol: "Frontend Dev Junior" },
    { id: 2, name: "Nicolas", age: 22, rol: "Frontend Dev Senior" },
    { id: 3, name: "Victor", age: 22, rol: "Backend Dev" },
  ];

  const [student, setStudent] = useState<Student | null>(null);

  function changeStudent(student: Student) {
    setStudent(student);
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
        <h3>{color === "red" ? "🔴" : color === "orange" ? "🟠" : "🟢"}</h3>
      </div>
      <div>
        <h2>Students List</h2>
        <StudentDetails student={student} />
        <StudentLists students={students} onClick={changeStudent} />
      </div>
    </>
  );
}

export default App;
