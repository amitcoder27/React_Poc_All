import React, { useRef } from "react";

function UseRefPOC() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Access the DOM node and focus the input
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useRef Example: Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <br /><br />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefPOC;
