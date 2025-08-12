import React, { useEffect, useState } from "react";

export default function ThrottlePOC() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let lastCall = 0;

    const handleScroll = () => {
      const now = new Date().getTime();
      if (now - lastCall >= 1000) { // run every 1 second
        setScrollPosition(window.scrollY);
        lastCall = now;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h2>Throttling Example</h2>
      <p>Scroll position (updates every 1s): {scrollPosition}</p>
    </div>
  );
}
