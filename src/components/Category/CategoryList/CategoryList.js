import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

import classes from "./CategoryList.module.css";

const categoryList = (props) => {
  const itemArray = Object.values(props.categoryData.menu_category)
  const displayContent = itemArray.map((key) => {
    return (
      <CategoryItem name={key} key={key} currentCategory={props.currentCategory}>
      </CategoryItem>
    );
  });
  return (
    <div className={classes.ListContainer}>
      <ul className={classes.List}>{displayContent}</ul>
    </div>
  );
};

export default categoryList;

