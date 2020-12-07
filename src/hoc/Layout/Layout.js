import React, { Component } from "react";
import Aux from "../Aux/Aux";
import ToolBar from "../../components/ToolBar/ToolBar"
import classes from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <ToolBar/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;