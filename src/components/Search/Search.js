import React from "react";
import classes from "./Search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const search = (props) => {
  function clickSearch(event) {
    event.preventDefault()
    const category = event.target.elements[0].value
    const path = `/category/${category}`;
    props.history.push(path)
  }
  return (
    <div className={classes.SearchDiv}>
      <form className={classes.Search} onSubmit={clickSearch}>
        <input
          type="text"
          className={classes.Search__field}
          placeholder="Search over 1,000,000 recipes..."
        />

        <button className={classes.btn}>
          <BiSearchAlt2 />
          <span>Search</span>
        </button>
        
      </form>
    </div>
  );
};

export default search;
