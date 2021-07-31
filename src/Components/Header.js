import classes from './Header.module.css';
import Button from './Common/Button';
import logo from '../Images/Logo.png';
import logoText from '../Images/Logo text.png';

function Header() {
    return (
    <header className={classes.header}>
        <div className={classes.image}>
        <img src={logo} alt='Logo'></img>
        <img src={logoText} alt='Logo Text'></img>
        </div>
        <nav className={classes.nav}>
            <p>About us</p>
            <p>Promotion</p>
            <p>Shop</p>
            <p>Contacts</p>
            <Button style={{width: '142px', height: '40px', fontSize: '1rem'}}>Contact Us</Button>
        </nav>
    </header>)
};

export default Header;