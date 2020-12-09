import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  let displayContent = "";
  if (props.useDropdown) {
    displayContent = (
      <li className={classes.NavigationItem}>
        <Link to={props.link} className={classes.NavigationItem}>
          {props.name}
        </Link>
      </li>
    );
  } else {
    displayContent = (
      <li className={classes.NavigationItem}>
        <Link to={props.link} className={classes.NavigationItem}>
          {props.name}
        </Link>
      </li>
    );
  }
  return displayContent;
};

export default navigationItem;
