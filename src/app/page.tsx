"use client";

import classes from "./Page.module.scss";

// import { useContext } from "react";
// import themeComtext from "../context/theme-context";

import Hero from "../sections/home/hero/Hero";

export default function Home() {
  return (
    <div className={classes["home-page"]}>
      <Hero />
    </div>
  );
}
