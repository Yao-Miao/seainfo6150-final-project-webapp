import React from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li
    className={classes.NavigationItem}
    onClick={()=>props.handleClick(props.name)}
  >
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.name}
    </a>
  </li>
);

export default navigationItem;
