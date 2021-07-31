import { Fragment } from "react";

import image from "../Images/map.png";
import line from "../SVG/line.svg";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.map}>
          <p>Contacts</p>
          <img src={image} alt="Map" />
        </div>
        <p className={classes.adress}>
          <img src={line} alt="Pointer line" />
          <h3>Our Adress</h3>
          <span>110 St-Cathedral Pkwy Station</span>
          <span>4310 94th St, Flushing</span>
          <span>94-54 Corona Ave., Elmhurst</span>
          <span>5627 Van Doren St, Queens</span>
        </p>
      </div>
      <div className={classes.copyright}>
        <p>2020 (c) - Samwyle bandtitos</p>
      </div>
    </>
  );
}

export default Footer;
