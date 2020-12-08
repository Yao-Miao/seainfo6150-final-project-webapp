import React from "react";
import classes from "./TabTtile.module.css";


const TabTtile = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
    </div>
  );
};

export default TabTtile;