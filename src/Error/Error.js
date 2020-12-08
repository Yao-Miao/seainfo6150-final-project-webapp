import React from "react";
import Aux from "../hoc/Aux/Aux";
import classes from "./Error.module.css";
import {ImCrying} from "react-icons/im";

const Error = () => {
  return (
    <Aux>
      <div className={classes.Container}>
          <ImCrying className={classes.icon}/>
          <p className={classes.p1}>404 ERROR </p>
          <p className={classes.p2}>The page doesn't exist</p>
      </div>
    </Aux>
  );
};

export default Error;
