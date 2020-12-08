import React from "react";
import classes from "./TabTtile.module.css";


const TabTtile = (props) => {
  let title = "";
  if(props.title === "popular_category"){
    title = "Most Populair Search";
  }else if(props.title === "menu_category"){
    title = "Recipe Category";
  }else if(props.title === "ingredients_category"){
    title = "Ingredients Category";
  }
  
  return (
    <div>
        <h1>{title}</h1>
    </div>
  );
};

export default TabTtile;