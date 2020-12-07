import React, { useEffect, useState }  from "react";

import classes from "./CategoryItem.module.css";

const categoryItem = (props) => {
  /*const [labStyle, setLabStyle] = useState(true);
  const onClick = () => {
    props.setRecipeType(props.name);
    const oldLabStyle = labStyle;
    setLabStyle(!oldLabStyle);
  }*/
  return (
    <li onClick={() => props.setRecipeType(props.name)}>
      <a className={classes.List__link} href={"#"}>
        <div>
          <h4 className={classes.Item__name}>{props.name}</h4>
        </div>
      </a>
    </li>
  );
};

export default categoryItem;
