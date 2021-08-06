import Button from "../Common/Button";
import Modal from "../Common/Modal";
import classes from "./Feedback.module.css";

function Feedback(props) {
  const callFormHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };





  return (
    <Modal classNameModal={classes.modal} onClick={props.onCloseFeedbackModal}>
      <div className={classes.feedback}>
        <form onSubmit={callFormHandler} className={classes.form}>
          <label htmlFor="name">Name</label>
          <input id="name"></input>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel"></input>
          <Button type={"submit"} className={classes["button-request"]}>
            Request Call
          </Button>
        </form>
        <div>
          <p>OR</p>
        </div>
        <div className={classes.form}>
          <p>+8 800 555-35-35</p>
          <a href="tel:81112223344">
            <Button className={classes.button}>Call Us</Button>
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default Feedback;
