import React from "react";
import classes from "./CategoryTab.module.css";
import TabTitle from "./Tab/TabTtile";
import TabItem from "./Tab/TabItem";


const categoryTab = (props) => {
  const itemArray = Object.values(props.categoryData)
  itemArray.sort();
  const displayContent = itemArray.map((key) => {
    return (
      <TabItem name={key} key={key}/>
    );
  });
  return (
    <div className={classes.Container}>
      <TabTitle title={props.categoryTag}/>
      <ul className={classes.List}>{displayContent}</ul>
    </div>
  );
};

export default categoryTab;