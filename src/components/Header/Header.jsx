import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.rotateShadows}></div>
      <div className={classes.title}>
        <h1>village social network</h1>
        <div className={classes.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </div>
    </header>
  );
};
export default Header;
