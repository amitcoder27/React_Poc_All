import React, { createContext, useState } from "react";

export const MyContext = createContext();

export function ContextAPIProviderConsumer({ children }) {
  const [value, setValue] = useState("Hello from Context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}
