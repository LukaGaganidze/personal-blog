import classes from "./Heading.module.scss";

import Link from "next/link";
import { Playfair_Display as playfair } from "next/font/google";
const headerFont = playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// ICONS
import Coffee from "./componenets/Coffee.componenet ";
import Insta from "./componenets/Insta.componenet";
import Linkedin from "./componenets/Linkedin.componenet";
import Portfolio from "./componenets/Portfolio.componenet";

import Moon from "./componenets/Moon.componenet";
import Sun from "./componenets/Sun.module";

const Heading = () => {
  return (
    <div className={`${classes["heading"]} ${headerFont.className}`}>
      {/* ICON LINKS */}
      <div className={classes["heading__socials"]}>
        <ul>
          <li>
            <Link target="_blank" href="https://www.buymeacoffee.com/dashboard">
              <Coffee />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.instagram.com/luka_gaganidze/"
            >
              <Insta />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/lukagaganidze/"
            >
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://lukasportfolio.vercel.app/">
              <Portfolio />
            </Link>
          </li>
        </ul>
      </div>

      {/* NAVIGATION LINKS */}
      <div className={classes["heading__links"]}>
        <h1 className={`${classes["main-home-link"]}`}>
          <Link href="#">Coffee Dirven Coder</Link>
        </h1>
        <ul>
          <li>
            <Link href="#">Latest</Link>
          </li>
          <li>
            <Link href="#">Coding</Link>
          </li>
          <li>
            <Link href="#">Sport</Link>
          </li>
          <li>
            <Link href="#">Interests</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
      </div>

      {/* THEME BUTTON */}
      <div className={classes["heading__theme"]}>
        {/* night */}
        <div
          className={`${classes["heading__theme__icons-box"]} ${classes["heading__theme__icons-box__dark"]}`}
        >
          <Moon />
        </div>

        {/* day */}
        {/* <div className={classes["heading__theme__icons-box"]}>
          <Sun />
        </div> */}
      </div>
    </div>
  );
};

export default Heading;
