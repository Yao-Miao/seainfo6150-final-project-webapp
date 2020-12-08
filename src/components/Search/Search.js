import React from "react";
import classes from "./Search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

const search = (props) => {
  let categoryInput;
  function clickSearch() {
    console.log(categoryInput.value);
    //props.history.push("/category/" + categoryInput.value);
    props.history.push("/category/salad");
  }
  /*
  <button className={classes.btn} onClick={clickSearch}>
          <BiSearchAlt2 />
          <span>Search</span>
        </button>*/
  return (
    <div className={classes.SearchDiv}>
      <form className={classes.Search} onSubmit={clickSearch}>
        <input
          type="text"
          className={classes.Search__field}
          placeholder="Search over 1,000,000 recipes..."
          ref={(input) => (categoryInput = input)}
        />
        <button className={classes.btn} onClick={clickSearch}>
          <BiSearchAlt2 />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default search;
