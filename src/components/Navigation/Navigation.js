import React, {useState } from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const [homeActive, setHomeActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  function handleClick(pageName) {
    console.log(pageName)
    if (pageName === "Home") {
      setHomeActive(true);
      setCategoryActive(false);
    } else if (pageName === "Category") {
      setHomeActive(false);
      setCategoryActive(true);
    }
  }


  return (
    <ul className={classes.Navigation}>
      <NavigationItem link="/" active={homeActive} handleClick={handleClick} name="Home"/>
      <NavigationItem link="/Category" active={categoryActive} handleClick={handleClick} name="Category"/>
    </ul>
  );
};

export default Navigation;
