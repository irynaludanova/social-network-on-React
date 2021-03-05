import React from "react";
import classes from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <div className={classes.img}>
      <img src={props.profile.photos.large}></img>
    </div>
  );
};
export default Avatar;
