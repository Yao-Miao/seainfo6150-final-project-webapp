import React, { useState } from "react";
import classes from "./Form.module.css";
import { AiOutlineUserAdd } from "react-icons/ai";

function SignUpForm(props) {
  //const [showModal, setShowModal] = useState(false);
  /*function handleClick() {
    setShowModal(true);
    return false;
  }
  function cancelHandler() {
    setShowModal(false);
  }*/

  function handleSubmit(event){
    event.preventDefault()
    const uname = event.target.elements[0].value;
    const fname = event.target.elements[1].value;
    const lname = event.target.elements[2].value;
    const email = event.target.elements[3].value;
    const tel = event.target.elements[4].value;
    const gender = event.target.elements[5].value;
    const path = `/welcome/${uname}/${fname}/${lname}/${email}/${tel}/${gender}`;
    props.history.push(path);
  }

  return (
    <div className={classes.container}>
      {/*<PopWindow
        show={showModal}
        modalClosed={cancelHandler}
      >test</PopWindow>*/}
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.info}>
          <label for="uname" className={classes.label}>
            User name:
          </label>
          <input
            type="text"
            id="uname"
            name="uname"
            required
            className={classes.input}
          />
          <label for="fname" className={classes.label}>
            First name:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            required
            className={classes.input}
          />
          <label for="lname" className={classes.label}>
            Last name:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            required
            className={classes.input}
          />

          <label for="email" className={classes.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={classes.input}
          />

          <label for="tel" className={classes.label}>
            Phone:
          </label>
          <input type="tel" id="tel" name="tel" className={classes.input} />

          <label for="gender" className={classes.label}>
            Gender:
          </label>
          <span className={classes.span}>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male" className={classes.radio_label}>
              Male
            </label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female" className={classes.radio_label}>
              Female
            </label>
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other" className={classes.radio_label}>
              Other
            </label>
          </span>
        </div>
        <button className={classes.btn_small} >
          <input type="submit" value="Sign Up" className={classes.send}/>
          <AiOutlineUserAdd className={classes.icon} />
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
