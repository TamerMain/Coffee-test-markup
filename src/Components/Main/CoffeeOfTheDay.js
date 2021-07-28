import classes from "./CoffeeOfTheDay.module.css";
import cupImage from "../../SVG/Vector 27.svg";
import Button from '../Layout/Button';

function CoffeeOfTheDay() {
  return (
    <div>
      <div className={classes.div}>
      <div className={classes.description}>
          <h2>Coffee of the day</h2>
          <p>
            Americano coffee (Italian: Caffè Americano) is an espresso diluted
            with hot water.<br/> The presence of foam (cream) depends on how coffee
            and water are<br/> mixed. Attention! The concepts of “American” and
            “American coffee” should not be<br/> confused. n the second case, this
            refers not to diluted espresso, but to a drink<br/> prepared through a
            filter system.
          </p>
          <Button>Order Now</Button>
        </div>
        <div className={classes.background}>
          <img className={classes.img} src={cupImage} alt="Img_3"></img>
          <p>Promotion</p>
        </div>
      </div>
    </div>
  );
}
export default CoffeeOfTheDay;
