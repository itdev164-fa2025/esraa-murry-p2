import React from "react";
import { ThemeProvider } from "./src/themes/theme-context";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
