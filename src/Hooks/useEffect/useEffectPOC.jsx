import React, { useState, useEffect } from "react";

const useEffectPOC = () => {
 const [seconds, setSeconds] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   // Runs after every render: sets up an interval to increment seconds every 1 second
  //   const interval = setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //   }, 1000);

  //   // Cleanup function to clear interval when component unmounts or before next effect
  //   return () => clearInterval(interval);
  // }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  // Cleanup: clear the interval on unmount or before next effect run
  return () => clearInterval(interval);
}, []);



 useEffect(() => {
    // Handler to update width state when window is resized
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); //


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Timer using useEffect</h1>
      <p>Seconds elapsed: {seconds}</p>
       <h1>Window width: {width}px</h1>
    </div>
  )
}

export default useEffectPOC