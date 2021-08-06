import useInnerWidth from "../../hooks/useInnerWidth";
import { observer } from "mobx-react-lite";

import classes from "./Header.module.css";
import Button from "../Common/Button";
import logo from "../../Images/Logo.png";
import logoText from "../../Images/Logo text.png";
import menuButton from "../../SVG/menuButton.svg";

const Header = observer((props) => {
  const [currentWidth] = useInnerWidth();

  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <img src={logo} alt="Logo" />
        <img src={logoText} alt="Logo Text" />
      </div>
      {currentWidth <= "992" ? (
        <button className={classes["burger-menu"]} onClick={props.onOpenMenu}>
          <img src={menuButton} alt="Menu Button" />
        </button>
      ) : (
        <nav className={classes.nav}>
          <p onClick={props.onNavMenu}>About us</p>
          <p onClick={props.onNavMenu}>Promotion</p>
          <p onClick={props.onNavMenu}>Shop</p>
          <p onClick={props.onNavMenu}>Contacts</p>
          <Button
            onClick={props.onOpenFeedbackModal}
            className={classes.button}
          >
            Contact Us
          </Button>
        </nav>
      )}
    </header>
  );
});

export default Header;
