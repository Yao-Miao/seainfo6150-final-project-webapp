import React from "react";
import classes from "./Search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const search = (props) => {
  let categoryInput;

  function clickSearch (){
    console.log(categoryInput.value);
    props.history.push("/category/" + categoryInput.value);
  };
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
