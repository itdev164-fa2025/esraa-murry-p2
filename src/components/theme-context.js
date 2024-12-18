import React, { createContext, useState, useContext } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

// ThemeProvider component to wrap your application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
