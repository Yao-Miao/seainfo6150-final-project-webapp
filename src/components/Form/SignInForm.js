import React from "react";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";
import {FiSend} from "react-icons/fi";

function SignInForm() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
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
        <Link className={classes.btn_small}>
            <input type="submit" value="Sign In" className={classes.send}/>
            <FiSend className={classes.icon}/>
        </Link>
      </form>
    </div>
  );
}

export default SignInForm;