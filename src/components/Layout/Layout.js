/* eslint-disable no-unused-expressions */
import React from "react";
import Auxillary from "../../hoc/Auxillary";
import classes from "./Layout.css";

const Layout = props => {
  return (
    <Auxillary>
      <div>Backdrop, Sidedrawer, toolbars</div>
      <main className={classes.Content}>{props.children}</main>
    </Auxillary>
  );
};

export default Layout;
