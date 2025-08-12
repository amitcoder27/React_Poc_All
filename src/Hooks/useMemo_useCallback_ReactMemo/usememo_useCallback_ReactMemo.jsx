import React, { useState, useCallback, useMemo } from "react";
import ChildMix from "./child"; 

export default function UseCallback_UseMemo_ReactMemo() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Memoize an expensive calculation based on count
  const computedValue = useMemo(() => {
    console.log("Running expensive calculation");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += count * i;
    }
    return total;
  }, [count]);

  // Memoize the increment function so it doesn't get recreated on every render
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  console.log("Parent rendered");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>useCallback + useMemo + React.memo POC</h1>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle: {toggle.toString()}</button>

      <ChildMix number={count} onClick={increment} />
    </div>
  );
}