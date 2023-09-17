"use client";

import classes from "./Email.module.scss";

import { Playfair_Display as playfair } from "next/font/google";
import Link from "next/link";
import BotomBorderNonAbsolute from "@/componenets/bottomBorder/BotomBorderNonAbsolute";

import ThemeContext from "@/context/theme-context";
import { useContext } from "react";

const headerFont = playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Email = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="contact-email" className={classes["contact-email"]}>
      <BotomBorderNonAbsolute />

      <div className={classes["main-container"]}>
        {/* text */}
        <p className={classes["main-text"]}>
          If you're interested, feel free to reach out to me. I'm always open to
          new opportunities and collaborations.
        </p>

        {/* optional btn */}
        {theme === "light" ? (
          <Link
            className={`${headerFont.className} ${classes["envelope-container"]}`}
            href="mailto: lukagaganidzedev@gmail.com"
          >
            <p>EMAIL ME</p>
          </Link>
        ) : (
          <Link
            className={`${headerFont.className} ${classes["envelope-container-black-theme"]}`}
            href="mailto: lukagaganidzedev@gmail.com"
          >
            <p>EMAIL ME</p>
          </Link>
        )}
      </div>
      <BotomBorderNonAbsolute />
    </section>
  );
};

export default Email;
