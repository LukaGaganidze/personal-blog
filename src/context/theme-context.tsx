"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

const ThemeContext = createContext({
  theme: "",
  toDarkMode: () => {},
  toLightMode: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [theme, setTheme] = useState("light");

  function toDarkMode() {
    setTheme("dark");
  }
  function toLightMode() {
    setTheme("light");
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

// "use client";

// import { createContext, useState, useEffect, ReactNode } from "react";

// const ThemeContext = createContext({
//   theme: "",
//   toDarkMode: () => {},
//   toLightMode: () => {},
// });

// export const ThemeContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }): JSX.Element => {
//   // Check if `localStorage` is available and if we are on the client side
//   const isLocalStorageAvailable =
//     typeof window !== "undefined" && window.localStorage;

//   console.log(isLocalStorageAvailable);

//   // Get the theme from `localStorage` if available
//   const storedThemeInformation: string | null = isLocalStorageAvailable
//     ? localStorage.getItem("theme")
//     : null;

//   //  THEME STATE
//   const [theme, setTheme] = useState(storedThemeInformation || "light");

//   useEffect(() => {
//     if (storedThemeInformation) {
//       if (storedThemeInformation === "light") {
//         setTheme("light");
//         localStorage.setItem("theme", "light");
//       }
//       if (storedThemeInformation === "dark") {
//         setTheme("dark");
//         localStorage.setItem("theme", "dark");
//       }
//     }

//     if (!storedThemeInformation) {
//       setTheme(() => "light");
//       localStorage.setItem("theme", "light");
//     }
//   }, []);

//   //  TO DARK STATE
//   function toDarkMode() {
//     if (theme === "dark") return;

//     setTheme(() => "dark");
//     localStorage.setItem("theme", "dark");
//   }

//   // TO LIGHT STATE
//   function toLightMode() {
//     if (theme === "light") return;
//     setTheme(() => "light");
//     localStorage.setItem("theme", "light");
//   }

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme: theme,
//         toDarkMode: toDarkMode,
//         toLightMode: toLightMode,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;
