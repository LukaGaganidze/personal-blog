import classes from "./Intro.module.scss";

import Image from "next/image";
import introimg from "../../../assets/coffee/intro/intro.jpg";

const Intro = () => {
  return (
    <div className={classes["container"]}>
      <Image src={introimg} alt="Coffee Lighter" />
    </div>
  );
};

export default Intro;
