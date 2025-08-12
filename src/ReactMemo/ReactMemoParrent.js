import React, { useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

const ReactMemoParent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  console.log("ReactMemoParent rendered");

  return (
    <div style={{ padding: 20, border: "1px solid #ccc" }}>
      <h2>ReactMemoParent</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button
        onClick={() => setOtherState(!otherState)}
        style={{ marginLeft: 10 }}
      >
        Toggle Other State
      </button>

      <p>Count: {count}</p>
      <p>Other State: {otherState.toString()}</p>

      <ReactMemoChild value={count} />
    </div>
  );
};

export default ReactMemoParent;
