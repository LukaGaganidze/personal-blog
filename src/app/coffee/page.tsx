"use client";
import { StaticImageData } from "next/image";

import classes from "./Coffee.module.scss";

import CoffeeLeftSide from "@/sections/coffee/coffeeSides/left/CoffeeLeftSide";
import CoffeeRightSide from "@/sections/coffee/coffeeSides/right/CoffeeRightSide";

import { useContext, useState } from "react";
import { coffeeCtx } from "@/context/coffee-context";

import { Playfair_Display as playfair } from "next/font/google";
import { isTemplateExpression } from "typescript";
const headerFont = playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Coffee = () => {
  const coffeeContext = useContext(coffeeCtx);

  // array from coffe context
  const { coffeeData } = coffeeContext;

  // coffe data state
  const [coffeeAtt, setcoffeeArr] = useState(coffeeData);

  // for left side
  const leftCoffeeData = coffeeAtt.filter((item) => {
    return Number(item.index) % 2 === 0;
  });
  // for right side
  const rightCoffeeData = coffeeAtt.filter((item) => {
    return Number(item.index) % 2 !== 0;
  });

  // sorting function
  function sortEarliest() {
    const sortedCoffeArr = coffeeContext.sortLatest();
    setcoffeeArr(() => sortedCoffeArr);
  }

  // sorting funtion
  function sortLatest() {
    const sortedCoffeArr = coffeeContext.sortEarliest();
    setcoffeeArr(() => sortedCoffeArr);
  }

  return (
    <div className={classes["container"]}>
      {/* HEADER */}
      <div className={classes["main-heading-box"]}>
        <h3 className={headerFont.className}>Coffee Driven Page</h3>

        <div className={classes["svg-box"]}>
          <p>SORT BY DATE</p>
          {/* sorting svg up */}
          <svg
            onClick={sortEarliest}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${classes["sorting-svg"]} ${classes["sorting-svg-up"]}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            />
          </svg>

          {/* sorting svg down */}
          <svg
            onClick={sortLatest}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${classes["sorting-svg"]} ${classes["sorting-svg-down"]}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </div>
        <p className={classes["desctiption"]}>
          Here I share my experiences with the coffees I've tasted and enjoyed
          enough to designed, code, and share on this page simply because well,
          why not? Enjoy
        </p>
      </div>

      {/* COFFEES */}
      <div className={classes["coffee-main"]}>
        <CoffeeLeftSide coffeeContentData={leftCoffeeData} />
        <CoffeeRightSide coffeeContentData={rightCoffeeData} />
      </div>
    </div>
  );
};

export default Coffee;
