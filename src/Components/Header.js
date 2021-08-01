import useInnerWidth from "../hooks/useInnerWidth";

import classes from "./Header.module.css";
import Button from "./Common/Button";
import logo from "../Images/Logo.png";
import logoText from "../Images/Logo text.png";
import menuButton from "../SVG/menuButton.svg";

function Header(props) {
  const [currentWidth] = useInnerWidth();

  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <img src={logo} alt="Logo"></img>
        <img src={logoText} alt="Logo Text"></img>
      </div>
      {currentWidth <= "992" ? (
        <button onClick={props.onOpenMenu}>
          <img src={menuButton} alt="Menu Button"></img>
        </button>
      ) : (
        <nav className={classes.nav}>
          <p>About us</p>
          <p>Promotion</p>
          <p>Shop</p>
          <p>Contacts</p>
          <Button style={{ width: "142px", height: "40px", fontSize: "1rem" }}>
            Contact Us
          </Button>
        </nav>
      )}
    </header>
  );
}

export default Header;
