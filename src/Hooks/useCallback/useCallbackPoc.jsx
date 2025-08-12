import React, { useState, useCallback } from "react";

export default function UseCallbackPOC() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Memoized increment function
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  console.log("Component rendered");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>useCallback Without Child Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setToggle(!toggle)} style={{ marginLeft: 10 }}>
        Toggle: {toggle.toString()}
      </button>
    </div>
  );
}
