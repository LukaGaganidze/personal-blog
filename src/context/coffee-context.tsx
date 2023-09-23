"use client";

import { createContext, ReactNode } from "react";

import {
  coffeObj,
  modifiedCoffeObj,
  CoffeeContextType,
} from "@/types/coffee-types";

// coffee images
import testimg1 from "../assets/coffee/experiences/test/coffee1.jpg";
import testimg2 from "../assets/coffee/experiences/test/coffee2.jpg";
import testimg3 from "../assets/coffee/experiences/test/coffee3.jpg";
import testimg4 from "../assets/coffee/experiences/test/coffee4.jpg";
import testimg5 from "../assets/coffee/experiences/test/coffee5.jpg";
import testimg6 from "../assets/coffee/experiences/test/coffee6.jpg";

// context
export const coffeeCtx = createContext<CoffeeContextType>({
  coffeeData: [],
  sortLatest: () => [],
  sortEarliest: () => [],
});

// initial coffee object array
const coffeeData: coffeObj[] = [
  {
    link: "",
    heading: "GREAT COFFEE 1",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg1,
    postDate: "11.10.1996",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 2",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg2,
    postDate: "11.10.1997",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 3",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg3,
    postDate: "11.10.1998",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 4",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg4,
    postDate: "11.10.1999",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 5",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg5,
    postDate: "11.10.2000",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 6",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg6,
    postDate: "11.10.2001",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 7",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg1,
    postDate: "11.10.2002",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 8",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg2,
    postDate: "11.10.2003",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 9",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg3,
    postDate: "11.10.2004",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 10",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg4,
    postDate: "11.10.2005",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 11",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg5,
    postDate: "11.10.2006",
  },
  {
    link: "",
    heading: "A GREAT COFFEE 12",
    title:
      "This coffee  will change your life its absolutely amazxing you will never gonna regret the overprised value of the coffe  e njoy ",
    img: testimg6,
    postDate: "11.10.2007",
  },
];

// context provider
export const CoffeeCTXProvider = ({ children }: { children: ReactNode }) => {
  // added indexes for displaying properly left/roght sides of the page
  const indexedCoffeeData: modifiedCoffeObj[] = coffeeData.map((coffee, i) => {
    return { ...coffee, index: Number(i + 1) };
  });

  // returns new arr sorted from latest to newst
  function sortLatest() {
    return [...indexedCoffeeData].sort((a, b) => {
      const dateA: Date = new Date(a.postDate);
      const dateB: Date = new Date(b.postDate);
      return dateB.getTime() - dateA.getTime();
    });
  }

  // returns new arr sorted from newest to latest
  function sortEarliest() {
    // Sort by postDate from earliest to latest
    return [...indexedCoffeeData].sort((a, b) => {
      const dateA: Date = new Date(a.postDate);
      const dateB: Date = new Date(b.postDate);
      return dateA.getTime() - dateB.getTime();
    });
  }

  return (
    <coffeeCtx.Provider
      value={{
        coffeeData: indexedCoffeeData,
        sortLatest: sortLatest,
        sortEarliest: sortEarliest,
      }}
    >
      {children}
    </coffeeCtx.Provider>
  );
};
