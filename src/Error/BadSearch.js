import React from "react";
import classes from "./BadSearch.module.css";
import {ImCrying} from "react-icons/im";

const BadSearch = (props) => {
  return (
      <div className={classes.Container}>
          <ImCrying className={classes.icon}/>
          <p className={classes.p1}>Not found recipes related " {props.recipeType} "</p> 
          <p className={classes.p2}>Please Try Again!</p> 
      </div>
  );
};

export default BadSearch;
