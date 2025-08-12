import React, { useContext } from "react";
import { CountContext } from "./useContextPOCProvider";

export default function CounterRead() {
  const { count } = useContext(CountContext);
  

  return<>

    <h1>UseContext </h1>

   <h2>Current Count: {count}</h2>;
  </>
  
}
