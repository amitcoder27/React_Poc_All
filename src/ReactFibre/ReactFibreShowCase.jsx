import React, { useState } from "react";

function heavyComputation(num) {
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i * num;
  }
  return total;
}

export default function ReactFibreShowCase() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

    const result = heavyComputation(count); // runs every render

//how to solve by useMemo
//   const result = React.useMemo(() => heavyComputation(count), [count]);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>

      <h2>Result of heavy computation: {result}</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
}
