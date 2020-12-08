import React from "react";

import classes from "./TabTtile.module.css";

const TabItem = (props) => {

  return (
    <li>
      <a className={classes.Item__name} href={"/category/" + props.name}>
        <div>
          <h4 className={classes.Item__name}>{props.name}</h4>
        </div>
      </a>
    </li>
  );
};

export default TabItem;