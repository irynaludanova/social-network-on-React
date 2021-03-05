import React from "react";
import classes from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={classes.description}>
      <h2>{props.profile.fullname}</h2>
      <h3>{props.profile.lookingForAJob}</h3>
      <h3>{props.profile.contacts.facebook}</h3>
      <h3>{props.profile.contacts.youtube}</h3>
    </div>
  );
};
export default Description;
