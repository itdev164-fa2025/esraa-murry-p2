import React from "react";
import { Link } from "gatsby";
import { useTheme } from "./theme-context";

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
