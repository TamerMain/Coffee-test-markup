import classes from './WidthWrapper.module.css';

function WidthWrapper(props) {
    return <div className={classes.div}>{props.children}</div>
};

export default WidthWrapper;