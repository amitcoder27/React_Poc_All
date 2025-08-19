// import React, { useEffect, useState } from "react";

// export default function ThrottlePOC() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     let lastCall = 0;

//     const handleScroll = () => {
//       const now = new Date().getTime();
//       if (now - lastCall >= 1000) { // run every 1 second
//         setScrollPosition(window.scrollY);
//         lastCall = now;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div style={{ height: "200vh", padding: "20px" }}>
//       <h2>Throttling Example</h2>
//       <p>Scroll position (updates every 1s): {scrollPosition}</p>
//     </div>
//   );
// }


import React, { useState, useCallback } from "react";

// Simple throttle function
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

export default function ThrottlePOC() {
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount((c) => c + 1);
    console.log("Incremented at:", new Date().toLocaleTimeString());
  };

  // Throttle the increment function to run at most once every 2 seconds
  const throttledIncrement = useCallback(throttle(increment, 2000), []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Throttle Example in React</h1>
      <p>Count: {count}</p>
      <button onClick={throttledIncrement}>Click me rapidly!</button>
      <p>
        Even if you click many times quickly, count increments at most once every 2 seconds.
      </p>
    </div>
  );
}
