import classes from "./CoffeeLeftSide.module.scss";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
  coffeeContentData: modifiedCoffeObj[]; // Replace 'modifiedCoffeObj' with your actual type
}

const CoffeeLeftSide = ({ coffeeContentData }: CoffeeSideProps) => {
  return (
    <div>
      {coffeeContentData.map((item) => {
        return (
          <div key={item.index} className={classes["left-side"]}>
            <Link className={classes["left-side__link"]} href="">
              <Image
                className={classes["left-side__img"]}
                src={item.img}
                alt="ss"
              />
            </Link>

            <div className={classes["left-side__text"]}>
              <p className={classes["left-side__text__date"]}>
                {item.postDate}
              </p>
              <Link href="">
                <h3>{item.heading}</h3>
              </Link>

              <p className={classes["left-side__text__title"]}>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoffeeLeftSide;
