import CoffeeShop from './CoffeeShop';
import Description from './Description';
import CoffeeOfTheDay from './CoffeeOfTheDay';
import classes from './Main.module.css';

function Main() {
    return (
        <div>
            <div>
                <CoffeeShop/>
                <Description/>
                <CoffeeOfTheDay/>
            </div>
        </div>
    );
};

export default Main;