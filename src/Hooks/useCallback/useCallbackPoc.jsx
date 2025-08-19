import React, { useState, useCallback } from "react";

export default function UseCallbackPOC() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Memoized increment function
  const increment = useCallback(() => {
     console.log("Component rendered useCallback inside");// only runs(funcion execution) when increment function will be call 
     // useCallback prevent from function creation  again and aagain while  redering rerederin 
    setCount((c) => c + 1);
  }, []);

  const justfunc=()=>{
    console.log("just function getting call usecallback outside");
    setCount((c) => c + 1);
    // same function run(exution) as above increment func , but it will create new function each render , 
    // above increment function will not create again and again while rerender
  }

  console.log("Component rendered useCallback outside");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>useCallback Without Child Example</h1>
      <p>Count:   {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setToggle(!toggle)} style={{ marginLeft: 10 }}>
        Toggle: {toggle.toString()}
      </button>
    </div>
  );
}
