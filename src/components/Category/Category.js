import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList/CategoryList";
import { isEmpty } from "lodash";

function Category(props) {
  const [fetchedData, setFetchedData] = useState({});
  const [categoryTag, setCategoryTag] = useState("category");
  

  useEffect(() => {

    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "http://demo6174807.mockable.io/" + categoryTag
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData, categoryTag]);

  

  return isEmpty(fetchedData) ? null : (
    <CategoryList categoryData={fetchedData} setRecipeType={props.setRecipeType}/>
  );
}

export default Category;
