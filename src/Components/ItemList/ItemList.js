import WidthWrapper from "../Common/WidthWrapper";
import useInnerWidth from '../../hooks/useInnerWidth';

import Item from "./Item";
import classes from "./ItemList.module.css";
import rightArrow from "../../SVG/Arrow 1.svg";
import leftArrow from "../../SVG/Arrow 2.svg";

const coffee = [
  {
    name: "Americano",
    description:
      "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
  },
  {
    name: "Latte",
    description:
      "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
  },
  {
    name: "Espresso",
    description:
      "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
  },
];

function ItemList() {
  const [currentWidth] = useInnerWidth();

  let sliceSize;
  if (currentWidth > 1300) {sliceSize = 3};
  if (currentWidth < 1300) {sliceSize = 2};
  if (currentWidth < 992) {sliceSize = 1};
  

  return (
    <div className={classes.background}>
      <WidthWrapper>
        <div>{`${currentWidth}`}</div>
        <div className={classes.items}>
          <button>
            <img src={leftArrow} alt="Left Arrow"></img>
          </button>
          {coffee.slice(0, sliceSize).map((item) => (
            <Item name={item.name} description={item.description}></Item>
          ))}
          <button>
            <img src={rightArrow} alt="Right Arrow"></img>
          </button>
        </div>
      </WidthWrapper>
    </div>
  );
}

export default ItemList;
