import React from "react";

import classes from "./TabItem.module.css";
import { IoPricetagOutline } from "react-icons/io5";

const TabItem = (props) => {
  return (
    <li>
      <a className={classes.List__link} href={"/category/" + props.name}>
        <div className={classes.Item}>
          <IoPricetagOutline className={classes.Icon}/>
          <h4 className={classes.Item__name}>{props.name}</h4>
        </div>
      </a>
    </li>
  );
};

export default TabItem;
