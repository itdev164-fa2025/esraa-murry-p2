import React, { createContext, useContext, useState } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// Custom Hook to use the Theme Context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default to light theme

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
