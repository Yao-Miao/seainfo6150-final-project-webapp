import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Navigation from "../Navigation/Navigation";
import userImg from "../../img/userImg.jpg";
/*import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"*/

import classes from "./ToolBar.module.css";
import { Link } from "react-router-dom";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div className={classes.Search}>
      <Search history={props.history} setSearchVal={props.setSearchVal} />
    </div>
    <div className={classes.navDiv}>
      <nav className={classes.Nav}>
        <Navigation />
      </nav>
      <div className={classes.dropdown}>
        <figure className={classes.results__fig}>
          <img src={userImg} alt="userImg" className={classes.img} />
        </figure>
        <div className={classes.dropdown_content}>
          <Link to="/signin" className={classes.List__link}>
            <div>
              <h4 className={classes.Item__name}> Sign In </h4>
            </div>
          </Link>
          <Link to="/signup" className={classes.List__link}>
            <div>
              <h4 className={classes.Item__name}> Sign up </h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default toolbar;
