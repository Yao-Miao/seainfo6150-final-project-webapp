import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li
    className={classes.NavigationItem}
    onClick={()=>props.handleClick(props.name)}
  >
    <Link to={props.link}  className={classes.NavigationItem}> 
    {props.name}
    </Link>

    
    {/*<a href={props.link} className={props.active ? classes.active : null}>
      {props.name}
    </a>*/}


  </li>
);

export default navigationItem;
