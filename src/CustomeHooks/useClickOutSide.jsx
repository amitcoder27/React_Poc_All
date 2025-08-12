import { useEffect, useRef } from "react";

export function useClickOutside(handler) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      // If click is outside the element referenced by ref
      if (ref.current && !ref.current.contains(event.target)) {
        handler(); // call the handler function
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return ref;
}
