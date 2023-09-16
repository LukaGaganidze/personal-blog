"use client";

import themeClasses from "./GlobalThemeContext.module.scss";

import { useContext } from "react";
import ThemeContext from "@/context/theme-context";

import { ReactNode } from "react";

const GlobalThemeContext = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        themeClasses[`${theme === "light" ? "light-theme" : "dark-theme"}`]
      }
    >
      {children}
    </div>
  );
};

export default GlobalThemeContext;
