import classes from "./MobileBurgerMenuModal.module.css";
import logo from "../../Images/Logo.png";
import logoText from "../../Images/Logo text.png";
import twitterLogo from "../../SVG/twitter.svg";
import instagramLogo from "../../SVG/insta.svg";
import facebookLogo from "../../SVG/facebook.svg";
import cross from "../../SVG/cross.svg";

function NavigationModal(props) {
  return (
    <div className={classes.menu}>
      <header>
        <img src={logo} alt="Logo"></img>
        <img src={logoText} alt="Logo Text"></img>
        <button onClick={props.onCloseMenu}>
          <img src={cross} alt="Close menu"></img>
        </button>
      </header>
      <div className={classes.nav}>
        <h3 onClick={props.onMobileNavMenu}>Home</h3>
        <h3 onClick={props.onMobileNavMenu}>About us</h3>
        <h3 onClick={props.onMobileNavMenu}>Promotion</h3>
        <h3 onClick={props.onMobileNavMenu}>Shop</h3>
        <h3 onClick={props.onMobileNavMenu}>Contacts</h3>
      </div>
      <footer>
        <a href="http://instagram.com/">
          <img src={instagramLogo} alt="Instagram Link" />
        </a>
        <a href="http://facebook.com/">
          <img src={facebookLogo} alt="Facebook Link" />
        </a>
        <a href="http://twitter.com/">
          <img src={twitterLogo} alt="Twitter Link" />
        </a>
      </footer>
    </div>
  );
}

export default NavigationModal;
