"use client";

import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "",
  toDarkMode: () => {},
  toLightMode: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const storedThemeInformation = localStorage.getItem("theme");

  //  THEME STATE
  const [theme, setTheme] = useState(storedThemeInformation || "light");

  useEffect(() => {
    if (storedThemeInformation === "light") {
      setTheme("light");
    }
    if (storedThemeInformation === "dark") {
      setTheme("dark");
    }
  }, []);

  //  TO DARK STATE
  function toDarkMode() {
    if (theme === "dark") return;

    setTheme(() => "dark");
    localStorage.setItem("theme", "dark");
  }

  // TO LIGHT STATE
  function toLightMode() {
    if (theme === "light") return;
    setTheme(() => "light");
    localStorage.setItem("theme", "light");
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toDarkMode: toDarkMode,
        toLightMode: toLightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
