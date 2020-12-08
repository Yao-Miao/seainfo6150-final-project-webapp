import React from "react";
import classes from "./RecipeIngredient.module.css";
import { Fraction } from "fractional";
import { AiOutlineCheckCircle } from "react-icons/ai";

const RecipeIngredient = (props) => {
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

  const formatCount = (count) => {
    if (count) {
      // count = 2.5 --> 2 1/2
      // count = 0.5 --> 1/2
      const newCount = Math.round(count * 100) / 100;
      const [int, dec] = newCount
        .toString()
        .split(".")
        .map((el) => parseInt(el, 10));

      if (!dec) return newCount;

      if (int === 0) {
        const fr = new Fraction(newCount);
        return `${fr.numerator}/${fr.denominator}`;
      } else {
        const fr = new Fraction(newCount - int);
        const str = `${int} ${fr.numerator}/${fr.denominator}`;
        if(str.length > 5) return `${int}` ;
        return `${int} ${fr.numerator}/${fr.denominator}`;
      }
    }
    return "?";
  };

  return (
    <li className={classes.recipe__item}>
      <AiOutlineCheckCircle className={classes.icon} />
      <div className={classes.recipe__count}>{formatCount(objIng.count)}</div>
      <div className={classes.recipe__ingredients}>
        {objIng.unit + " " + objIng.ingredient}
      </div>
    </li>
  );
};

export default RecipeIngredient;
