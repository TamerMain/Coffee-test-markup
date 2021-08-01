import Button from "../Common/Button";
import classes from "./CoffeeShop.module.css";
import mealsImage from "../../SVG/Vector 22.svg";
import twitterLogo from "../../SVG/twitter.svg";
import instagramLogo from "../../SVG/insta.svg";
import facebookLogo from "../../SVG/facebook.svg";
import buttonArrow from '../../SVG/arrow.svg';

function CoffeeShop() {
  return (
    <div className={classes.coffee}>
      <div className={classes.order}>
        <p>Drink coffee enjoy with Samwayle</p>
        <h1>Coffee Shop</h1>
        <Button>Order here</Button>
      </div>
      <div className={classes.logo}>
        <button><img src={buttonArrow} alt={buttonArrow}></img></button>
        <div className={classes.background}>
          <img src={mealsImage} alt="Manual Coffee Grinder"></img>
        </div>
        <div className={classes.contacts}>
          <button>
            <img src={twitterLogo} alt="Twitter Link"></img>
          </button>
          <button>
            <img src={instagramLogo} alt="Instagram Link"></img>
          </button>
          <button>
            <img src={facebookLogo} alt="Facebook Link"></img>
          </button>
          <div>
            <p>Follow us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeShop;
