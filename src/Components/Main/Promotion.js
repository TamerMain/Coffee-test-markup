import classes from "./Promotion.module.css";
import cupImage from "../../SVG/Vector 27.svg";
import Button from "../Common/Button";

function Promotion() {
  return (
    <div className={classes.promotion}>
      <div>
        <h2>Coffee of the day</h2>
        <p>
          Americano coffee (Italian: Caffè Americano) is an espresso diluted
          with hot water. The presence of foam (cream) depends on how coffee and
          water are mixed. Attention! The concepts of “American” and “American
          coffee” should not be confused. n the second case, this refers not to
          diluted espresso, but to a drink prepared through a filter system.
        </p>
        <Button>Order Now</Button>
      </div>
      <div className={classes.background}>
        <p>Promotion</p>
        <img src={cupImage} alt="Paper cup of coffee"></img>
      </div>
    </div>
  );
}
export default Promotion;
