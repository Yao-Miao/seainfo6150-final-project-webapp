import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecipeItem.module.css";

const recipeItem = (props) => {
  return (
    <div className={classes.ItemContainer}>
      <div>
        <Link
          to={"/recipe/" + props.recipe.recipe_id}
          className={classes.recipe__link}
        >
          <figure className={classes.recipe__fig}>
            <img src={props.recipe.image_url} alt={props.recipe.title} />
          </figure>
        </Link>
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
