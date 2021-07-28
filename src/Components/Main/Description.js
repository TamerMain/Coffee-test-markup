import classes from "./Description.module.css";
import cupImage from "../../SVG/Vector 23.svg";

function Description() {
  return (
    <div>
      <div className={classes.div}>
        <div className={classes.background}>
            <p>About Us</p>
          <img className={classes.img} src={cupImage} alt="Img_2"></img>
        </div>
        <div className={classes.description}>
          <h2>Coffee Shop Samwayle</h2>
          <p>
            Only one moment - when the barista reaches out over the bar to
            transfer the cup to the
            <br /> outstretched hand of the buyer. But this is exactly the
            moment when a connection arises
            <br /> between us and our guests.
          </p>
          <p>
            And we strive to do our best to maintain this connection - starting
            with our commitment<br/> to selecting the highest quality coffee in the
            world and ending with how we interact<br/> with guests and organizations
            to fulfill our obligations.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Description;
