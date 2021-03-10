import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = ({ login, logout, isAuth }) => {
  return (
    <header className={classes.header}>
      <div className={classes.rotateShadows}></div>
      <div className={classes.title}>
        <h1>Dev2Dev</h1>
        <h2>social network</h2>
      </div>
      <div className={classes.loginBlock}>
        {isAuth ? (
          <div>
            {login} <button onClick={logout}>LogOut</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
