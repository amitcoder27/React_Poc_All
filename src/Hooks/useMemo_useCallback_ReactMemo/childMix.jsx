import React from "react";
const ChildMix = React.memo(({ number, onClick }) => {
  console.log("Child rendered");
  return (
    <div>
      <p>Memoized Number: {number}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );
});
export default ChildMix