"use client";
import classes from "./MobileNav.module.scss";

import { useContext } from "react";
import ThemeContext from "@/context/theme-context";
import { MenuCTX } from "@/context/menu-context";

import Link from "next/link";
import BotomBorderNonAbsolute from "@/componenets/bottomBorder/BotomBorderNonAbsolute";

const MobileNav = () => {
  const { theme } = useContext(ThemeContext);

  const { menuOpen } = useContext(MenuCTX);
  const { closeMenu } = useContext(MenuCTX);

  return (
    <div
      className={`${classes["mobile-nav"]} ${
        classes[theme === "light" ? "mobile-nav__light" : "mobile-nav__dark"]
      } ${classes[menuOpen ? "active" : ""]}`}
    >
      <div className={classes["links-container"]}>
        <ul className={classes["links-container__linksul"]}>
          <li>
            <BotomBorderNonAbsolute />
            <Link onClick={closeMenu} className={classes["nav-link"]} href="/">
              Home
            </Link>
            <BotomBorderNonAbsolute />
          </li>
          {/*  */}
          <li>
            <Link
              onClick={closeMenu}
              className={classes["nav-link"]}
              href="/coding/projects"
            >
              projects
            </Link>
            <BotomBorderNonAbsolute />
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className={classes["nav-link"]}
              href="/coding/articles"
            >
              articles
            </Link>
            <BotomBorderNonAbsolute />
          </li>
          {/*  */}
          <li>
            <Link
              onClick={closeMenu}
              className={classes["nav-link"]}
              href="/fencing"
            >
              Fencing
            </Link>
            <BotomBorderNonAbsolute />
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className={classes["nav-link"]}
              href="/coffee"
            >
              Coffee
            </Link>
            <BotomBorderNonAbsolute />
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className={classes["nav-link"]}
              href="/about"
            >
              About
            </Link>
            <BotomBorderNonAbsolute />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MobileNav;
