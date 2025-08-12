import React, { useContext } from "react";
import { CountContext } from "./useContextPOCProvider";

export default function CounterUpdater() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
