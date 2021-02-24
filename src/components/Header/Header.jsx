import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.rotateShadows}></div>
      <div className={classes.title}>
        <h1>village social network</h1>
      </div>
    </header>
  );
};
export default Header;
