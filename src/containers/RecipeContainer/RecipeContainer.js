
import Aux from "../../hoc/Aux/Aux";
import React, { useEffect, useState } from "react";
import classes from "./RecipeContainer.module.css";
import RecipeView from "../../components/Recipe/RecipeView/RecipeView";
import { isEmpty } from "lodash";
import { render } from "@testing-library/react";
import ShoppingList from "../../components/ShoppingList/ShoppingList";

function RecipeContainer(props) {

  const [recipe, setReicpe] = useState({});
  const [ingredient, setIngredient] = useState({});
  const [showList, setShowList] = useState(false);
  const [servingNum, setServingNum] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "https://forkify-api.herokuapp.com/api/get?rId=" + props.recipeId
      );
      const responseJson = await response.json();
      const responseData = Object.values(responseJson)[0];
      setReicpe(responseData);
      setIngredient(responseData.ingredients)
    };

    if (isEmpty(recipe)) {
      fetchData();
    }
  }, [recipe,ingredient]);

  return isEmpty(recipe) ? null : (
    <Aux>
      <div className={classes.Container}>
        <RecipeView recipe={recipe} servingNum={servingNum} showList={showList} setShowList={setShowList} setServingNum={setServingNum} />
        <ShoppingList ingredients={ingredient} showList={showList} servingNum={servingNum}/>
      </div>
    </Aux>
  );
}
export default RecipeContainer;