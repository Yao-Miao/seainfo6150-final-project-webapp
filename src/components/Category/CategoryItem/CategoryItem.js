import React from "react";
import { Link } from "react-router-dom";

import classes from "./CategoryItem.module.css";

const categoryItem = (props) => {
  /*const [labStyle, setLabStyle] = useState(true);
  const onClick = () => {
    props.setRecipeType(props.name);
    const oldLabStyle = labStyle;
    setLabStyle(!oldLabStyle);
  }*/
  let linkClass = classes.List__link;
  if (props.name === props.currentCategory) {
    linkClass = classes.List__link_visited;
  }
  /*<a className={linkClass} href={"/category/" + props.name}>
        <div>
          <h4 className={classes.Item__name}>{props.name}</h4>
        </div>
      </a> */
  return (
    <Link to={"/category/" + props.name} className={linkClass}>
        <div>
          <h4 className={classes.Item__name}> {props.name} </h4>
        </div>
    </Link>
  );
};

export default categoryItem;
