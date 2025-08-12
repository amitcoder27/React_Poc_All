import React, { useState, useMemo } from "react";

function expensiveCalculation(num) {
  console.log("Running expensive calculation...");
  // Simulate heavy computation
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num * i;
  }
  return result;
}

export default function UseMemoPOC() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false);

  // Memoize the result of expensiveCalculation; only recomputes if 'number' changes
  const computedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useMemo Example</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        style={{ width: "100px", fontSize: "1.2rem" }}
      />

      <p>Computed value: {computedValue}</p>

      <button onClick={() => setToggle(!toggle)}>
        Toggle: {toggle.toString()}
      </button>
    </div>
  );
}
