import React from "react";
import classes from "./RecipeItem.module.css";

const recipeItem = (props) => {
  return (
    <div className={classes.ItemContainer}>
      <div>
        <a className={classes.recipe__link} href="#">
          <figure className={classes.recipe__fig}>
            <img src={props.recipe.image_url} alt={props.recipe.title} />
          </figure>
        </a>
      </div>

      <div>
        <h4 className={classes.recipe__name}>{props.recipe.title}</h4>
      </div>
      <div>
        <p className={classes.recipe__author}>{props.recipe.publisher}</p>
      </div>
    </div>
  );
};

export default recipeItem;
