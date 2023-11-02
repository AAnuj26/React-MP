import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    // counter = counter + 1;
    counter >= 20 ? setCounter(counter) : setCounter(counter + 1);
    console.log("clicked", counter);
  };
  const removeValue = () => {
    counter ? setCounter(counter - 1) : setCounter(counter);
    console.log("clicked", counter);
  };

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}> Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
