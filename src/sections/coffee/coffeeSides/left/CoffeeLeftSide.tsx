"use client";
import { modifiedCoffeObj } from "@/types/coffee-types";

import CoffeeItem from "../shared/CoffeeItem";

// Define the prop type for the coffeeContentData prop
interface CoffeeSideProps {
  coffeeContentData: modifiedCoffeObj[];
}

const CoffeeLeftSide = ({ coffeeContentData }: CoffeeSideProps) => {
  return (
    <div>
      {coffeeContentData.map((item) => {
        return <CoffeeItem item={item} key={item.index} />;
      })}
    </div>
  );
};

export default CoffeeLeftSide;
