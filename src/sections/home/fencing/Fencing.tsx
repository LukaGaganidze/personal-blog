import classes from "./Fencing.module.scss";

import { Playfair_Display as playfair } from "next/font/google";

const headerFont = playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import Introductionary from "./componenets/intro/Introductionary";

const Fencing = () => {
  return (
    <section className={classes["fencing-sec"]}>
      <h3 className={`${headerFont.className} ${classes["main-heading"]}`}>
        Fencing
      </h3>
      <Introductionary />
    </section>
  );
};

export default Fencing;
