import React from "react";
import classes from "./ShoppingItem.module.css";
import { Fraction } from "fractional";

const ShoppingItem = (props) => {
  const unitsLong = [
    "tablespoons",
    "tablespoon",
    "ounces",
    "ounce",
    "teaspoons",
    "teaspoon",
    "cups",
    "pounds",
  ];
  const unitsShort = ["tbsp", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound"];
  const units = [...unitsShort, "kg", "g"];

  // 1) Uniform units
  let ingredient = props.ingredient.toLowerCase();

  unitsLong.forEach((unit, i) => {
    ingredient = ingredient.replace(unit, units[i]);
  });

  // 2) Remove parentheses
  ingredient = ingredient.replace(/ *\([^)]*\)*/g, "");

  // 3) Parse ingredients into count, unit and ingredient
  const arrIng = ingredient.split(" ");
  const unitIndex = arrIng.findIndex((el2) => units.includes(el2));

  let objIng;

  if (unitIndex > -1) {
    //There is a unit
    const arrCount = arrIng.slice(0, unitIndex);
    let count;
    if (arrCount.length === 1) {
      count = eval(arrIng[0].replace("-", "+"));
    } else {
      count = eval(arrIng.slice(0, unitIndex).join("+"));
    }
    objIng = {
      count,
      unit: arrIng[unitIndex],
      ingredient: arrIng.slice(unitIndex + 1).join(" "),
    };
  } else if (parseInt(arrIng[0], 10)) {
    //There us No unit but a number
    objIng = {
      count: parseInt(arrIng[0], 10),
      unit: "",
      ingredient: arrIng.slice(1).join(" "),
    };
  } else if (unitIndex === -1) {
    //There is no unit and no number
    objIng = {
      count: 1,
      unit: "",
      ingredient,
    };
  }

  return (
    <li className={classes.shopping__item}>
      <div className={classes.shopping__count}>
        <input
          type="number"
          defaultValue={(objIng.count * props.servingNum).toString()}
          step={"1"}
        />
        <span className={classes.unit}>{objIng.unit}</span>
      </div>
      <div className={classes.shopping__description}>
        {objIng.ingredient}
      </div>
    </li>
  );
};

export default ShoppingItem;
