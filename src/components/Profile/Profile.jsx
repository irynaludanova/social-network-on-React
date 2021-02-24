import React from "react";
import Avatar from "../Avatar/Avatar";
import Description from "../Descriptions/Description";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={classes.userInfo}>
        <Avatar />
        <Description />
      </div>
      <div className={classes.userActivity}>
        <MyPosts />
      </div>
    </div>
  );
};
export default Profile;
