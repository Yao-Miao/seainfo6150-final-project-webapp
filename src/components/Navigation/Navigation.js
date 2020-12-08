import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

const navigationItems = (props) => (
  <ul className={classes.Navigation}>
    <NavigationItem link="/" active>
      Home
    </NavigationItem>
    <NavigationItem link="/Category">
      Category
    </NavigationItem>
  </ul>
);

export default navigationItems;