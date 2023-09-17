import classes from "./Footer.module.scss";
import { Playfair_Display as playfair } from "next/font/google";
const headerFont = playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import Link from "next/link";

const Footer = () => {
  return (
    <div className={`${headerFont.className} ${classes["container"]}`}>
      <div className={classes["link-box"]}>
        {/* left */}
        <ul>
          <li>
            <Link href="/coding">CODING</Link>
          </li>
          <li>
            <Link href="/fencing">FENCING</Link>
          </li>
          <li>
            <Link href="/coffee">COFFEE</Link>
          </li>
        </ul>

        {/* left */}
        <ul>
          <li>
            <Link target="_blank" href="https://github.com/LukaGaganidze">
              GitHub
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://lukasportfolio.vercel.app/">
              Portfolio
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/">
              Instagram
            </Link>
          </li>
        </ul>
      </div>

      <h2 className={`${classes["main-link"]}`}>
        <Link href="/">Coffee Dirven Coder</Link>
      </h2>
    </div>
  );
};

export default Footer;
