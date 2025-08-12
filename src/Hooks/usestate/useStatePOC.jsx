import React, { useState } from "react";

const useStatePOC = () => {
    const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter using useState</h1>
      <p>Current Count: {count}</p>
      <button onClick={decrement} style={{ marginRight: "10px" }}>- Decrement</button>
      <button onClick={increment}>+ Increment</button>
    </div>
  )
}

export default useStatePOC