import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Navigation from "../Navigation/Navigation";
/*import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"*/

import classes from "./ToolBar.module.css";
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div className={classes.Search}>
      <Search history={props.history} setSearchVal={props.setSearchVal}/>
    </div>
    <nav className={classes.Nav}>
      <Navigation />
    </nav>
  </header>
);

export default toolbar;
