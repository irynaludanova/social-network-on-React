import React from "react";
import classes from "./Avatar.module.css";

const Avatar = ({ profile }) => {
  return (
    <div className={classes.img}>
      <img src={profile.photos.large} alt={"avatar"}></img>
    </div>
  );
};
export default Avatar;
