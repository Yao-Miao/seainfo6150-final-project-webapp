import React, {useState } from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

const Navigation = (props) => {

  return (
    <ul className={classes.Navigation}>
      <NavigationItem link="/" name="Home" useDropdown={false}/>
      <NavigationItem link="/Category"  name="Category" useDropdown={true}/>
    </ul>
  );
};

export default Navigation;
