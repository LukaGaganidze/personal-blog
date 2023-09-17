import Intro from "@/sections/coffee/Intro/Intro";

import CoffeeLeftSide from "@/sections/coffee/coffeeSides/left/CoffeeLeftSide";
import CoffeeRightSide from "@/sections/coffee/coffeeSides/right/CoffeeRightSide";

import classes from "./Coffee.module.scss";

const Coffee = () => {
  return (
    <div className={classes["coffee-main"]}>
      <CoffeeLeftSide />
      <CoffeeRightSide />
    </div>
  );
};

export default Coffee;
