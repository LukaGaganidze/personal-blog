import classes from "./CoffeeRightSide.module.scss";

import { modifiedCoffeObj } from "@/types/coffee-types";

import CoffeeItem from "../shared/CoffeeItem";

// Define the prop type for the coffeeContentData prop
interface CoffeeSideProps {
  coffeeContentData: modifiedCoffeObj[];
}

const CoffeeRightSide = ({ coffeeContentData }: CoffeeSideProps) => {
  return (
    <div>
      {coffeeContentData.map((item) => {
        return <CoffeeItem item={item} key={item.index} />;
      })}
    </div>
  );
};

export default CoffeeRightSide;
