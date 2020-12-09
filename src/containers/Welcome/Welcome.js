import React from "react";
import classes from "./Welcome.module.css";
import { render } from "@testing-library/react";
import Aux from "../../hoc/Aux/Aux";

function Welcome(props) {
  return (
    <Aux>
      <div className={classes.Container}>
          <h1 className={classes.Hello}>HELLO!</h1>
          <div className={classes.name}>
              {props.uname}
          </div>
          <div className={classes.text}>
              Good to see you here
          </div>
      </div>
    </Aux>
  );
}

export default Welcome;
