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

const Heading = () => {
  return (
    <div className={`${classes["heading"]} ${headerFont.className}`}>
      {/* ICON LINKS */}
      <div className={classes["heading__socials"]}>
        <ul>
          <li>
            <Link href="#">
              <Coffee className={classes["icon"]} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Insta className={classes["icon"]} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Portfolio className={classes["icon"]} />
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
            <Link href="#">Latest Feed</Link>
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
        <div>dark theme</div>
      </div>
    </div>
  );
};

export default Heading;
