import { Fragment } from "react";

import image from "../Images/map.png";
import line from "../SVG/line.svg";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <Fragment>
      <div className={classes.div}>
        <div>
          <img src={image} alt="Img_4"></img>
        </div>
        <div>
          <img className={classes.line} src={line} alt="Line"></img>
          <p className={classes.contacts}>Contacts</p>
        </div>
        <p className={classes.adress}>
          <h3>Our Adress</h3>
          <span>110 St-Cathedral Pkwy Station</span>
          <span>4310 94th St, Flushing</span>
          <span>94-54 Corona Ave., Elmhurst</span>
          <span>5627 Van Doren St, Queens</span>
        </p>
      </div>
      <div className={classes.span}>
        <p>2020 (c) - Samwyle bandtitos</p>
      </div>
    </Fragment>
  );
}

export default Footer;
