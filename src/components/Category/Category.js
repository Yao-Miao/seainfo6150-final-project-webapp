import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList/CategoryList";
import CategoryTab from "./CategoryTab/CategoryTab";
import { isEmpty } from "lodash";

function Category(props) {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch("https://demo6174807.mockable.io/category");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  if (props.useFor === "CategoryContainer" && !isEmpty(fetchedData)) {
    return (
      <div>
        <CategoryTab categoryData={fetchedData.popular_category} categoryTag={"popular_category"} />
        <CategoryTab categoryData={fetchedData.menu_category} categoryTag={"menu_category"} />
        <CategoryTab categoryData={fetchedData.ingredients_category} categoryTag={"ingredients_category"} />
      </div>
    );

    /*return isEmpty(fetchedData) ? null : (
      <CategoryTab categoryData={fetchedData} categoryTag={props.categoryTag}/>
    );*/
  }
  return isEmpty(fetchedData) ? null : (
    <CategoryList
      categoryData={fetchedData}
      currentCategory={props.currentCategory}
    />
  );
}

export default Category;
