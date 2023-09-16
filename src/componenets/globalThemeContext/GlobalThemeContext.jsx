import themeClasses from "./GlobalThemeContext.module.scss";

import { useContext } from "react";
import ThemeContext from "@/context/theme-context";
const GlobalThemeContext = ({ children }) => {
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
