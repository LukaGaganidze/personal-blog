"use client";

import classes from "./CoffeeItem.module.scss";
import { StaticImageData } from "next/image";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefObject } from "react";

type modifiedCoffeObj = {
  link: string;
  heading: string;
  title: string;
  img: StaticImageData;
  postDate: string;
  index: number;
};

type IntersectionObserverEntry = {
  isIntersecting: boolean;
};

const CoffeeItem = ({ item }: { item: modifiedCoffeObj }) => {
  const coffeeBoxRef: RefObject<HTMLDivElement | null> = useRef(null);
  const [coffeeVisible, setCoffeeVisible] = useState(false);

  // INTERSECTION OBSERVER
  useEffect(() => {
    // INTERSECTIONOBSERVER FUNCTION
    const observerFunction = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setCoffeeVisible(true);
      }
    };

    // INTERSECTION OBSERVER OPTIONS
    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: "",
    };

    // INTERSECTION OBSERVER
    const coffeObserver = new IntersectionObserver(observerFunction, options);

    // OBSERVE
    if (coffeeBoxRef.current) {
      coffeObserver.observe(coffeeBoxRef.current);
    }

    //CLEANUP FUNCTION
    return () => {
      if (coffeeBoxRef.current) coffeObserver.unobserve(coffeeBoxRef.current);
    };
  });

  return (
    <div
      ref={coffeeBoxRef as React.LegacyRef<HTMLDivElement>}
      key={item.index}
      className={`${classes["coffe-item"]} ${
        coffeeVisible ? classes["fade-in"] : ""
      }`}
    >
      <Link className={classes["coffe-item__link"]} href="">
        <Image className={classes["coffe-item__img"]} src={item.img} alt="ss" />
      </Link>

      <div className={classes["coffe-item__text"]}>
        <p className={classes["coffe-item__text__date"]}>{item.postDate}</p>
        <Link href="">
          <h3>{item.heading}</h3>
        </Link>

        <p className={classes["coffe-item__text__title"]}>{item.title}</p>
      </div>
    </div>
  );
};

export default CoffeeItem;
