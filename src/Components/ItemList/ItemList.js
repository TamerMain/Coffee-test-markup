import Carousel, { arrowsPlugin, Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import WidthWrapper from "../Common/WidthWrapper";
import useInnerWidth from "../../hooks/useInnerWidth";

import Item from "./Item";
import classes from "./ItemList.module.css";
import rightArrowImage from "../../SVG/Arrow 1.svg";
import leftArrowImage from "../../SVG/Arrow 2.svg";

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
  {
    name: "Arabica",
    description:
      "You may have seen bags of coffee labeled `100 percent Arabica.` Arabica is the most popular type of bean used for coffee. ",
  },
  {
    name: "Robusta",
    description:
      "Robusta beans are typically cheaper to produce because the Robusta plant is easier to grow. They have a higher caffeine content and taste more bitter than Arabica beans.",
  },
  {
    name: "Decaf",
    description:
      "Coffee beans naturally contain caffeine, but roasters can use several different processes to remove almost all of it",
  },
  {
    name: "Cappuccino",
    description:
      "This espresso-based drink is similar to a latte, but the frothy top layer is thicker.",
  },
  {
    name: "Macchiato",
    description:
      "A macchiato is a shot of espresso with just a touch of steamed milk or foam.",
  },
  {
    name: "Café au Lait",
    description:
      "This fancy-sounding French drink is actually super simple: It's equal parts coffee and steamed or scalded milk.",
  },
  
];

function ItemList() {
  const [currentWidth] = useInnerWidth();

  let sliceSize;
  if (currentWidth > 1300) {
    sliceSize = 3;
  }
  if (currentWidth < 1300) {
    sliceSize = 2;
  }
  if (currentWidth < 992) {
    sliceSize = 1;
  }

  const leftArrow = currentWidth < 400 ? <></> : <button className={classes.carouselArrows}><img src={leftArrowImage} alt='Arrow Left'></img></button>;
  const rightArrow = currentWidth < 400 ? <></> : <button className={classes.carouselArrows}><img src={rightArrowImage} alt='Arrow Right'></img></button>;

  return (
    <div className={classes.background}>
      <WidthWrapper>
        <Carousel plugins={['centered',{
          resolve: arrowsPlugin,
          options: {
            arrowLeft: leftArrow,
            arrowLeftDisabled: <></>,
            arrowRight: rightArrow,
            arrowRightDisabled: <></>,
            addArrowClickHandler: true,
          }
        },{
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: sliceSize,
          }
        }]}>
          {coffee.map((item) => (
            <Item name={item.name} description={item.description}></Item>
          ))}
        </Carousel>
        <Dots></Dots>
      </WidthWrapper>
    </div>
  );
}

export default ItemList;
