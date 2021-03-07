import React from "react";
import classes from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <div className={classes.img}>
      <img src={props.profile.photos.large} alt={"avatar"}></img>
    </div>
  );
};
export default Avatar;
