import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";
import classes from "./RecipeList.module.css"

const recipeList = (props) => {
  const itemArray = Object.values(props.recipeData.recipes)
  const displayContent = itemArray.map((recipe) => {
    return(
        <RecipeItem recipe={recipe} key={recipe.recipe_id}></RecipeItem>
    );
  });
  return (
    <div className={classes.ListContainer}>
        {displayContent}
    </div>
  );
};

export default recipeList;
