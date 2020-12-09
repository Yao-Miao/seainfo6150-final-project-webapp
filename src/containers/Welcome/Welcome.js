import React from "react";
import classes from "./Welcome.module.css";
import { render } from "@testing-library/react";
import Aux from "../../hoc/Aux/Aux";

function Welcome(props) {
  return (
    <Aux>
      <div className={classes.Container}>{props.uname}</div>
    </Aux>
  );
}

export default Welcome;
