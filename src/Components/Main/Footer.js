import Map from "../Common/Map";
import line from "../../SVG/line.svg";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div id="Contacts" className={classes.contacts}>
        <div className={classes.map}>
          <p>Contacts</p>
          <Map></Map>
        </div>
        <div className={classes.line}><img src={line} alt="Pointer line" /></div>
        <div className={classes.adress}>
          <h3>Our Adress</h3>
          <p><span>1.</span>  Dobrovoltsev St., 58-a, Krasnoselskiy dist.<br/>
          <span>2.</span>  Shevtsova St., 6, Admiralteyskiy dist.<br/>
          <span>3.</span>  Shlisselburgsky pr., 7, Kolpinskiy dist.<br/>
          <span>4.</span>  Bolsh. Pushkarskays St., 28/2, Petrogradskiy dist.<br/>
          <span>5.</span>  Turistskaya St., 34, Primoskiy dist.<br/></p>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>2020 (c) - Samwyle bandtitos</p>
      </div>
    </footer>
  );
}

export default Footer;
