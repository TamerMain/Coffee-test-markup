
import classes from './Modal.module.css';
import logo from "../../Images/Logo.png";
import logoText from "../../Images/Logo text.png";
import twitterLogo from "../../SVG/twitter.svg";
import instagramLogo from "../../SVG/insta.svg";
import facebookLogo from "../../SVG/facebook.svg";
import cross from '../../SVG/cross.svg';

function Modal(props) {
  return (
    <div className={classes.menu}>
      <header>
        <img src={logo} alt="Logo"></img>
        <img src={logoText} alt="Logo Text"></img>
        <button onClick={props.onCloseMenu}><img src={cross} alt="Close menu"></img></button>
      </header>
      <div className={classes.menuLinks}>
        <h3 onClick={props.onNavMenu}>Home</h3>
        <h3 onClick={props.onNavMenu}>About us</h3>
        <h3 onClick={props.onNavMenu}>Promotion</h3>
        <h3 onClick={props.onNavMenu}>Shop</h3>
        <h3 onClick={props.onNavMenu}>Contacts</h3>
      </div>
      <footer>
        <button><img src={instagramLogo} alt="Instagram Link"></img></button>
        <button><img src={facebookLogo} alt="Facebook Link"></img></button>
        <button><img src={twitterLogo} alt="Twitter Link"></img></button>
      </footer>
    </div>
  );
}

export default Modal;
