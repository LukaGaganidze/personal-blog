import classes from "./Introductionary.module.scss";
import Image from "next/image";

import fencingpic from "../../../../../assets/home/fencing/fenc3.jpg";

import { Playfair_Display as playfair } from "next/font/google";
import Link from "next/link";

const headerFont = playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Introductionary = () => {
  return (
    <div className={classes["intro"]}>
      <Image
        src={fencingpic}
        alt="Image of me fencing"
        placeholder="blur"
        loading="lazy"
      />
      <div className={classes["intro__text"]}>
        <Link
          href="/fencing"
          className={`${headerFont.className} ${classes["intro__sub"]}`}
        >
          FENCING
        </Link>
        <h3
          className={`${headerFont.className} ${classes["heding-secondary"]}`}
        >
          THE ART OF FENCING
        </h3>
        <p>
          Fencing is an incredible sport that has taught me a multitude of life
          lessons beyond just the skills required for the sport itself. It is
          like an everlasting journey of discovering both the intricacies of
          fencing and the depths of one's own character. With a 15-year-long
          career, I can confidently say that fencing flows through my veins.
        </p>
      </div>
    </div>
  );
};

export default Introductionary;
