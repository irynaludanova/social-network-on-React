import React from "react";
import Avatar from "../../Avatar/Avatar";
import Description from "../../Descriptions/Description";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.userInfo}>
      <Avatar />
      <Description />
    </div>
  );
};
export default ProfileInfo;
