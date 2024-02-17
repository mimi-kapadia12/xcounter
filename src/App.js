import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>decrement</button>
    </div>
  );
}

export default App;
