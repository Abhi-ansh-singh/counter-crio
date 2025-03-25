import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <div style={{display:"flex", gap:"1px"}}>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
