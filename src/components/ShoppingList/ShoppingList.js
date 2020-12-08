import React from "react";

import classes from "./ShoppingList.module.css";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = (props) => {
  let showContent = "";
  if (props.showList) {
    showContent = props.ingredients.map((ingredient, index) => (
      <ShoppingItem ingredient={ingredient} key={index} servingNum={props.servingNum}/>
    ));
  }

  return (
    <div className={classes.shopping}>
      <h2 className={classes.head}>My Shopping List</h2>
      <ul className={classes.shopping__list}>{showContent}</ul>
    </div>
  );
};

export default ShoppingList;
