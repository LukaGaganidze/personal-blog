import { StaticImageData } from "next/image";

export type coffeObj = {
  link: string;
  heading: string;
  title: string;
  img: StaticImageData;
  postDate: string;
};

// tyoe for modified coffee object ( added index for sorting )
export type modifiedCoffeObj = {
  link: string;
  heading: string;
  title: string;
  img: StaticImageData;
  postDate: string;
  index: number;
};

// Explicitly specify the type of coffeeData
export type CoffeeContextType = {
  coffeeData: modifiedCoffeObj[];
  sortLatest(): modifiedCoffeObj[];
  sortEarliest(): modifiedCoffeObj[];
};
