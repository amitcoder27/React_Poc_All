import React, { useState, Suspense } from "react";

// Lazy load the components
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

export default function CodeSplittingLazyLoading() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ padding: 20 }}>
      <h1>React Code Splitting POC</h1>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>


      {/* Suspense shows fallback UI until lazy component loads */}
      <Suspense fallback={<div>Loading...</div>}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
      </Suspense>
    </div>
  );
}
