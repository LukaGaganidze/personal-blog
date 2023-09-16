import classes from "./Hero.module.scss";

import { Playfair_Display as playfair } from "next/font/google";

import Image from "next/image";

// images
// import fencing from "../../../assets/home/hero/fencing.png";
// import paragliding from "../../../assets/home/hero/paragliding.png";
// import marvel from "../../../assets/home/hero/marvel.png";
// import portfolio from "../../../assets/home/hero/portfolio.png";

import fencing from "../../../assets/home/hero/leps-v2/fencing-lep.png";
import marvel from "../../../assets/home/hero/leps-v2/marvel-lep.png";
import paragliding from "../../../assets/home/hero/leps-v2/paragliding-lep.png";
import portfolio from "../../../assets/home/hero/leps-v2/personal-lep.png";

import { useState } from "react";
import Link from "next/link";
const headerFont = playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const Hero = () => {
  // paragliding
  const [focusedPic1, setFocusedPic1] = useState(false);
  // marvel
  const [focusedPic2, setFocusedPic2] = useState(false);
  // fencing
  const [focusedPic3, setFocusedPic3] = useState(false);
  // portfolio
  const [focusedPic4, setFocusedPic4] = useState(false);
  return (
    <section className={classes["hero-sec"]}>
      {/* images */}
      <div className={classes["images-container"]}>
        <Link href="#">
          <Image
            onMouseEnter={() => setFocusedPic1(true)}
            onMouseLeave={() => setFocusedPic1(false)}
            className={`${classes["hero-image"]} ${
              classes[`${focusedPic1 ? "active" : ""}`]
            }`}
            src={paragliding}
            alt="Picture of my project"
            placeholder="blur"
          />
        </Link>

        <Link href="#">
          <Image
            onMouseEnter={() => setFocusedPic2(true)}
            onMouseLeave={() => setFocusedPic2(false)}
            className={`${classes["hero-image"]} ${
              classes[`${focusedPic2 ? "active" : ""}`]
            }`}
            src={marvel}
            alt="Picture of my project"
            placeholder="blur"
          />
        </Link>

        <Link href="#">
          <Image
            onMouseEnter={() => setFocusedPic3(true)}
            onMouseLeave={() => setFocusedPic3(false)}
            className={`${classes["hero-image"]} ${
              classes[`${focusedPic3 ? "active" : ""}`]
            }`}
            src={fencing}
            alt="Picture of my project"
            placeholder="blur"
          />
        </Link>

        <Link href="#">
          <Image
            onMouseEnter={() => setFocusedPic4(true)}
            onMouseLeave={() => setFocusedPic4(false)}
            className={`${classes["hero-image"]} ${
              classes[`${focusedPic4 ? "active" : ""}`]
            }`}
            src={portfolio}
            alt="Picture of my project"
            placeholder="blur"
          />
        </Link>
      </div>

      {/* text */}
      <div className={classes["text-container"]}>
        <p className={`${headerFont.className} ${classes["heading__sub"]}`}>
          PERSONAL PROJECTS
        </p>
        <h3 className={`${headerFont.className} ${classes["heading"]}`}>
          SOME OF MY PERSONAL PROJECTS
        </h3>
        <p>
          Here are some of my latest creations, developed using{" "}
          <strong>React JS / Next JS</strong>. I've diligently implemented best
          practices in frontend development, drawing inspiration from extensive
          research and incorporating the elements that resonated with me. I have
          a genuine passion for the process of crafting new projects, and I'm
          currently gearing up to tackle my next endeavor with{" "}
          <strong>Angular</strong> .
        </p>
      </div>
    </section>
  );
};

export default Hero;
