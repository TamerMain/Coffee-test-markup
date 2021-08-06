import Carousel from "../../Common/Carousel";

import WidthWrapper from "../../Common/WidthWrapper";
import useInnerWidth from "../../../hooks/useInnerWidth";

import Item from "./Item";
import classes from "./ItemList.module.css";

const coffee = [
  {
    key: 1,
    name: "Americano",
    description:
      "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
  },
  {
    key: 2,
    name: "Latte",
    description:
      "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
  },
  {
    key: 3,
    name: "Espresso",
    description:
      "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
  },
  {
    key: 4,
    name: "Arabica",
    description:
      "You may have seen bags of coffee labeled `100 percent Arabica.` Arabica is the most popular type of bean used for coffee. ",
  },
  {
    key: 5,
    name: "Robusta",
    description:
      "Robusta beans are typically cheaper to produce because the plant is easier to grow. They have a higher caffeine content and taste more bitter than Arabica beans.",
  },
  {
    key: 6,
    name: "Decaf",
    description:
      "Coffee beans naturally contain caffeine, but roasters can use several different processes to remove almost all of it",
  },
  {
    key: 7,
    name: "Cappuccino",
    description:
      "This espresso-based drink is similar to a latte, but the frothy top layer is thicker.",
  },
  {
    key: 8,
    name: "Macchiato",
    description:
      "A macchiato is a shot of espresso with just a touch of steamed milk or foam.",
  },
  {
    key: 9,
    name: "Café au Lait",
    description:
      "This fancy-sounding French drink is actually super simple: It's equal parts coffee and steamed or scalded milk.",
  },
];

function ItemList() {
  const [currentWidth] = useInnerWidth();

  let sliceSize = 3;
  let showArrows = true;
  if (currentWidth < 1300) {
    sliceSize = 3;
  }
  if (currentWidth < 992) {
    sliceSize = 2;
  }
  if (currentWidth < 767) {
    showArrows = false;
    sliceSize = 1;
  }
  if (currentWidth < 480) {
    showArrows = false;
    sliceSize = 1;
  }

  return (
    <div id="Shop" className={classes.background}>
      <WidthWrapper>
        <Carousel sliceSize={sliceSize} showArrows={showArrows}>
          {coffee.map((item) => (
            <Item
              key={item.key}
              name={item.name}
              description={item.description}
            />
          ))}
        </Carousel>
      </WidthWrapper>
    </div>
  );
}

export default ItemList;
