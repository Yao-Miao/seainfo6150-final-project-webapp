import React, { useEffect, useState } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./SearchResult.module.css";
import Category from "../../components/Category/Category";
import RecipeGrid from "../../components/Recipe/RecipeGrid/RecipeGrid"
import { render } from "@testing-library/react";

function SearchResult(props) {
  return (
    <Aux>
      <div className={classes.Container}>
       <Category currentCategory={props.category}/>
       <RecipeGrid recipeType={props.category}/>
      </div>
    </Aux>
  );
}

export default SearchResult;