import React, { useReducer } from "react";

// Define initial state
const initialState = { count: 0 };

// Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

export default function UseReducerPOC() {
  // useReducer returns current state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>useReducer Counter Example</h1>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "decrement" })}>- Decrement</button>
      <button onClick={() => dispatch({ type: "increment" })} style={{ marginLeft: 10 }}>
        + Increment
      </button>
      <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: 10 }}>
        Reset
      </button>
    </div>
  );
}
