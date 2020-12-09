import React from "react";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";
import {FiSend} from "react-icons/fi";

function InformationForm() {
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
        <Link className={classes.btn_small}>
            <input type="submit" value="Send" className={classes.send}/>
            <FiSend/>
        </Link>
      </form>
    </div>
  );
}

export default InformationForm;
