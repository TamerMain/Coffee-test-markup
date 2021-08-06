import Button from "../Common/Button";
import classes from "./CoffeeShop.module.css";
import coffeeGrinder from "../../SVG/Vector 22.svg";
import twitterLogo from "../../SVG/twitter.svg";
import instagramLogo from "../../SVG/insta.svg";
import facebookLogo from "../../SVG/facebook.svg";
import buttonArrow from "../../SVG/arrow.svg";

function CoffeeShop() {
  return (
    <div className={classes.welcome}>
      <div className={classes.order}>
        <p>Drink coffee enjoy with Samwayle</p>
        <h1>Coffee Shop</h1>
        <Button>Order here</Button>
      </div>
      <div className={classes.logo}>
        <button>
          <img src={buttonArrow} alt={buttonArrow} />
        </button>
        <div className={classes.background}>
          <img src={coffeeGrinder} alt="Manual Coffee Grinder" />
        </div>
        <div className={classes.contacts}>
          <a href="http://twitter.com/" target="blank">
            <img  src={twitterLogo} alt="Twitter Link" />
          </a>
          <a href="http://instagram.com/" target="blank">
            <img src={instagramLogo} alt="Instagram Link" />
          </a>
          <a href="http://facebook.com/" target="blank">
            <img  src={facebookLogo} alt="Facebook Link" />
          </a>
          <div>
            <p>Follow us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeShop;
