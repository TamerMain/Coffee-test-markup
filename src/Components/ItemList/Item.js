import Button from '../Common/Button';
import classes from './Item.module.css';

function Item(props) {
    return (
        <div className={classes.item}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <Button>Order Now</Button>
        </div>
    )
}

export default Item;