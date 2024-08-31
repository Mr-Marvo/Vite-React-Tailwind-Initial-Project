import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");
  const primaryColor = useState("#001830");

  const switchMode = (mode) => {
    if (mode === "dark") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        switchMode,
        primaryColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
