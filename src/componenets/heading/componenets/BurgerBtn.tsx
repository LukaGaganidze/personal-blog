"use client";
import ThemeContext from "@/context/theme-context";
import { useContext, useState } from "react";
import { MenuCTX } from "@/context/menu-context";

import classes from "./BurgerBtn.module.scss";
import styles from "./BurgerBtnDark.module.scss";

const BurgerBtn = () => {
  // menu state
  const { menuOpen } = useContext(MenuCTX);
  // toggle menu state
  const { toggleMenu } = useContext(MenuCTX);

  function toggleBurgerMenu(): void {
    toggleMenu();
  }

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "light" && (
        <div className={classes["container"]} onClick={toggleBurgerMenu}>
          <div
            className={`${classes[menuOpen ? "open" : ""]} ${classes["menu"]} ${
              classes["btn11"]
            }`}
            data-menu="11"
          >
            <div className={classes["icon-left"]}></div>
            <div className={classes["icon-right"]}></div>
          </div>
        </div>
      )}
      {theme !== "light" && (
        <div className={styles["container"]} onClick={toggleBurgerMenu}>
          <div
            className={`${styles[menuOpen ? "open" : ""]} ${styles["menu"]} ${
              styles["btn11"]
            }`}
            data-menu="11"
          >
            <div className={styles["icon-left"]}></div>
            <div className={styles["icon-right"]}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerBtn;
