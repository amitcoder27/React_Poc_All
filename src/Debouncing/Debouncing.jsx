import React, { useState, useEffect } from "react";

export default function DebouncePOC() {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(search);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <div>
      <h2>Debouncing Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>API Call Triggered For: {debouncedValue}</p>
    </div>
  );
}
