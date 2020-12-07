import React, { useEffect, useState } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./HomeContainner.module.css";
import Category from "../../components/Category/Category";
import RecipeGrid from "../../components/Recipe/RecipeGrid/RecipeGrid"
import { render } from "@testing-library/react";

function HomeContainer() {
  const [recipeType, setRecipeType] = useState("pizza");
  return (
    <Aux>
      <div className={classes.Container}>
       <Category setRecipeType={setRecipeType}/>
       <RecipeGrid recipeType={recipeType}/>
      </div>
    </Aux>
  );
}

export default HomeContainer;

/*import Reactfrom from "react";
import Aux from "../../hoc/Aux/Aux";
import Category from "../../components/Category/Category";
import classes from "./HomeContainner.module.css";

const homeContainer = (props) => {

    return (
        <Aux>
          <div className={classes.Container}>
           <Category/>
            <RecipeGrid> </RecipeGrid>
          </div>
        </Aux>
      );
};

export default homeContainer;*/
