"use client";
import classes from "./ArticklesSubHeading.module.scss";

import ThemeContext from "@/context/theme-context";
import { useContext } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import BotomBorderNonAbsolute from "@/componenets/bottomBorder/BotomBorderNonAbsolute";

const ArticklesSubHeading = () => {
  const pathname = usePathname();

  const { theme } = useContext(ThemeContext);

  return (
    <div className={classes["container"]}>
      <ul
        className={
          classes[
            theme === "light"
              ? "artickles-sub-heading-light"
              : "artickles-sub-heading-dark"
          ]
        }
      >
        <li
          className={classes[pathname === "/coding/articles" ? "active" : ""]}
        >
          <Link href="/coding/articles">JavaScript</Link>
        </li>
        <li
          className={
            classes[pathname === "/coding/articles/react" ? "active" : ""]
          }
        >
          <Link href="/coding/articles/react">ReactJS</Link>
        </li>
        <li
          className={
            classes[pathname === "/coding/articles/next" ? "active" : ""]
          }
        >
          <Link href="/coding/articles/next">NextJS</Link>
        </li>
        <li
          className={
            classes[pathname === "/coding/articles/angular" ? "active" : ""]
          }
        >
          <Link href="/coding/articles/angular">Angular</Link>
        </li>
      </ul>
      <BotomBorderNonAbsolute />
    </div>
  );
};

export default ArticklesSubHeading;
