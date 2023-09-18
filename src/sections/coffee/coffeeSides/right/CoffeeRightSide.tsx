import classes from "./CoffeeRightSide.module.scss";

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
  coffeeContentData: modifiedCoffeObj[];
}

const CoffeeRightSide = ({ coffeeContentData }: CoffeeSideProps) => {
  return (
    <div>
      {coffeeContentData.map((item) => {
        return (
          <div key={item.index} className={classes["right-side"]}>
            <Link className={classes["right-side__link"]} href="">
              <Image
                className={classes["right-side__img"]}
                src={item.img}
                alt="ss"
                placeholder="blur"
                loading="lazy"
              />
            </Link>

            <div className={classes["right-side__text"]}>
              <p className={classes["right-side__text__date"]}>
                {item.postDate}
              </p>
              <Link href="">
                <h3>{item.heading}</h3>
              </Link>

              <p className={classes["right-side__text__title"]}>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoffeeRightSide;
