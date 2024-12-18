import React from "react";
import { useTheme } from "../themes/theme-context";
import { ThemeProvider } from "styled-components";
import "../styles/global.css";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  // Define light and dark themes
  const themes = {
    light: {
      background: "#fff",
      text: "#333",
    },
    dark: {
      background: "#333",
      text: "#fff",
    },
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <div
        style={{
          backgroundColor: themes[theme].background,
          color: themes[theme].text,
          minHeight: "100vh",
          padding: "1rem",
        }}
      >
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
