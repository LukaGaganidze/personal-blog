"use client";

// DARK LIGHT THEME
import { ThemeContextProvider } from "./theme-context";
import GlobalThemeContext from "@/componenets/globalThemeContext/GlobalThemeContext";

// COFFEE CTX
import { CoffeeCTXProvider } from "./coffee-context";

// CODING/PROJEXTS
import { ProjectsCTXProvider } from "./coding-projects-context";

// MENU
import { MenuCTXProvider } from "./menu-context";

const CTX = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <GlobalThemeContext>
        <CoffeeCTXProvider>
          <ProjectsCTXProvider>
            <MenuCTXProvider>
              {/*  */}
              {children}
              {/*  */}
            </MenuCTXProvider>
          </ProjectsCTXProvider>
        </CoffeeCTXProvider>
      </GlobalThemeContext>
    </ThemeContextProvider>
  );
};

export default CTX;
