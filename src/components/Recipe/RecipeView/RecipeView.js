import React from "react";
import classes from "./RecipeView.module.css";
import RecipeIngredient from "./RecipeIngredient";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { BiBody } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {AiFillCaretRight} from "react-icons/ai";

function RecipeView(props) {
  const recipe = props.recipe;
  let newIngredient = recipe.ingredients;

  const numIng = recipe.ingredients.length;
  const periods = Math.ceil(numIng / 3);
  let time = periods * 10 + (10 * props.servingNum - 1);

  function addServing() {
    let oldNum = props.servingNum;
    props.setServingNum(oldNum + 1);
  }
  function minusServing() {
    let oldNum = props.servingNum;
    if (oldNum === 1) return;
    props.setServingNum(oldNum - 1);
  }
  function showShoppingList() {
    if (!props.showList) {
      props.setShowList(true);
    }
  }

  return (
    <div className={classes.recipe}>
      <figure className={classes.recipe__fig}>
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className={classes.recipe__img}
        />
        <h1 className={classes.recipe__title}>
          <span>{recipe.title}</span>
        </h1>
      </figure>
      <div className={classes.recipe__details}>
        <div className={classes.recipe__info}>
          <BiTimeFive className={classes.recipe__icon} />
          <span className={classes.recipe__info_data}>{time}</span>
          <span className={classes.recipe__info_data}> minutes</span>
        </div>
        <div className={classes.recipe__info}>
          <BiBody className={classes.recipe__icon} />
          <span className={classes.recipe__info_data}>{props.servingNum}</span>
          <span className={classes.recipe__info_data}> servings</span>
          <div className={classes.recipe__info_buttons}>
            <button className={classes.btn_tiny} onClick={minusServing}>
              <HiOutlineMinusCircle className={classes.recipe__icon} />
            </button>
            <button className={classes.btn_tiny} onClick={addServing}>
              <HiOutlinePlusCircle className={classes.recipe__icon} />
            </button>
          </div>
        </div>
      </div>

      <div className={classes.recipe__ingredients}>
        <ul className={classes.recipe__ingredient_list}>
          {newIngredient.map((ingredient, index) => (
            <RecipeIngredient ingredient={ingredient} key={index} />
          ))}
        </ul>

        <button className={classes.btn_small} onClick={showShoppingList}>
          <AiOutlineShoppingCart />
          <span>Add to shopping list</span>
        </button>
      </div>

      <div className={classes.recipe__directions}>
        <h2 className={classes.head}>How to cook it</h2>
        <p className={classes.recipe__directions_text}>
          This recipe was carefully designed and tested by
          <span className={classes.recipe__by}>{recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a className={classes.btn_small} href={recipe.publisher_url} target="_blank">
          <span>Directions</span>
          <AiFillCaretRight/>
        </a>
      </div>


    </div>
  );
}

export default RecipeView;
