import classes from "./Modal.module.css";
import cross from '../../SVG/cross.svg';

function Backdrop(props) {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      <button onClick={props.onClick} className={classes['close-modal-button']}><img src={cross} alt="Close menu"></img></button>
      {props.children}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <Backdrop onClick={props.onClick}></Backdrop>
      <ModalOverlay onClick={props.onClick} className={props.classNameModal}>{props.children}</ModalOverlay>
    </>
  );
}

export default Modal;
