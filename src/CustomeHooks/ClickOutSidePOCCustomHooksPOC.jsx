import React, { useState } from "react";
import { useClickOutside } from "./useClickOutSide";

export default function ClickOutsideCustomHookPOC() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const ref = useClickOutside(closeDropdown);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Dropdown</button>

      {isOpen && (
        <div
          ref={ref}
          style={{
            marginTop: 10,
            padding: 10,
            border: "1px solid #ccc",
            width: 200,
            backgroundColor: "#eee",
            marginLeft:"40%",
         
          }}
        >
          <p>This box closes if you click outside.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
