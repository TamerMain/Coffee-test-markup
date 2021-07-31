import classes from "./Description.module.css";
import cupImage from "../../SVG/Vector 23.svg";

function Description() {
  return (
    <div className={classes.description}>
      <div className={classes.background}>
        <p>About Us</p>
        <img src={cupImage} alt="Cup of coffee"></img>
      </div>
      <div className={classes["aboutUs"]}>
        <h2>Coffee Shop Samwayle</h2>
        <p>
          Only one moment - when the barista reaches out over the bar to
          transfer the cup to the outstretched hand of the buyer. But this is
          exactly the moment when a connection arises between us and our guests.
        </p>
        <p>
          And we strive to do our best to maintain this connection - starting
          with our commitment to selecting the highest quality coffee in the
          world and ending with how we interact with guests and organizations to
          fulfill our obligations.
        </p>
      </div>
    </div>
  );
}
export default Description;
