import React from "react";

import classes from "./TabItem.module.css";
import { IoPricetagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TabItem = (props) => {
  return (
    <Link to={"/category/" + props.name} className={classes.List__link}>
      <div className={classes.Item}>
        <IoPricetagOutline className={classes.Icon} />
        <h4 className={classes.Item__name}>{props.name}</h4>
      </div>
    </Link>
  );
};

export default TabItem;
