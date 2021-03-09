import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const DialogItem = ({ id, name }) => {
  let path = "/dialogs/" + id;
  return (
    <div className={classes.dialog + "" + classes.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
