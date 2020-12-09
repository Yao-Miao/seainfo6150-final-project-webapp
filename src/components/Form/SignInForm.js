import React from "react";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";
import { AiOutlineLogin } from "react-icons/ai";

function SignInForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const uname = event.target.elements[0].value;
    const path = `/welcome/${uname}`;
    props.history.push(path);
  }
  return (
    <div className={classes.container}>
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
        </div>
        <button className={classes.btn_small}>
          <input type="submit" value="Sign In" className={classes.send} />
          <AiOutlineLogin className={classes.icon} />
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
