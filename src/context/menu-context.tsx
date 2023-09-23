"use client";

import { createContext, ReactNode, useState } from "react";

export const MenuCTX = createContext({
  toggleMenu(): void {},
  openMenu(): void {},
  closeMenu(): void {},
  menuOpen: false,
});

export const MenuCTXProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev: boolean) => !prev);
  }

  function openMenu() {
    setMenuOpen(() => true);
  }

  function closeMenu() {
    setMenuOpen(() => false);
  }

  return (
    <MenuCTX.Provider
      value={{
        menuOpen: menuOpen,
        toggleMenu: toggleMenu,
        openMenu: openMenu,
        closeMenu: closeMenu,
      }}
    >
      {children}
    </MenuCTX.Provider>
  );
};
