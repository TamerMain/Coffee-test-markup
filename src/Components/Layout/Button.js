import classes from "./Button.module.css";

function Button(props) {
  return (
    <button className={classes.button} style={props.style}>
      {props.children}
    </button>
  );
}

export default Button;
