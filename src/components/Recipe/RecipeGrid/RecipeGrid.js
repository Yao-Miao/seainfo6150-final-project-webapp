import React, { useEffect, useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import { isEmpty } from "lodash";

function RecipeGrid(props) {

  const [fetchedData, setFetchedData] = useState({});
  const [recipeType, setRecipeType] = useState(props.recipeType);
  if(recipeType !== props.recipeType){
    setRecipeType(props.recipeType)
    setFetchedData({})
  }
  useEffect(() => {

    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=" + recipeType
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData, recipeType]);

  

  return isEmpty(fetchedData) ? null : (
    <RecipeList recipeData={fetchedData} />
  );
}

export default RecipeGrid;
