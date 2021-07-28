import Button from "../Layout/Button";
import classes from "./CoffeeShop.module.css";
import mealsImage from "../../SVG/Vector 22.svg";
import twitterLogo from "../../SVG/twitter.svg";
import instagramLogo from "../../SVG/insta.svg";
import facebookLogo from "../../SVG/facebook.svg";
import buttonArrow from '../../SVG/arrow.svg';

function CoffeeShop() {
  return (
    <div className={classes.div}>
      <div className={classes.order}>
        <p>Drink coffee enjoy with Samwayle</p>
        <h1>Coffee Shop</h1>
        <Button>Order here</Button>
      </div>
      <div className={classes.logo}>
        <button className={classes.button}><img src={buttonArrow} alt={buttonArrow}></img></button>
        <div className={classes.background}>
          <img className={classes.img} src={mealsImage} alt="Img_1"></img>
        </div>
        <div className={classes.contacts}>
          <div>
            <img src={twitterLogo} alt="Twitter"></img>
          </div>
          <div>
            <img src={instagramLogo} alt="Instagram"></img>
          </div>
          <div>
            <img src={facebookLogo} alt="Facebook"></img>
          </div>
          <div>
            <p>Follow us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeShop;
