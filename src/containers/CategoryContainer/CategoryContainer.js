import React, { useEffect, useState } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./CategoryContainer.module.css";
import Category from "../../components/Category/Category";
import { render } from "@testing-library/react";

function CategoryContainer(props) {
  const [recipeType, setRecipeType] = useState("salad");
  return (
    <Aux>
      <div className={classes.Container}>
        <Category useFor={"CategoryContainer"} tabTag ={props.tabTag}/>
      </div>
    </Aux>
  );
}

export default CategoryContainer;
