import classes from "./CoffeeRightSide.module.scss";

import { StaticImageData } from "next/image";

import CoffeeItem from "../shared/CoffeeItem";

type modifiedCoffeObj = {
  link: string;
  heading: string;
  title: string;
  img: StaticImageData;
  postDate: string;
  index: number;
};

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
