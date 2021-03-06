import React from "react";
import Avatar from "../../Avatar/Avatar";
import Preloader from "../../common/Preloader/Preloader";
import Description from "../../Descriptions/Description";
import ProfileStatus from "./ProfileStatus";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.userInfo}>
      <Avatar profile={props.profile} />
      <ProfileStatus status={"Hello"} />
      <Description profile={props.profile} />
    </div>
  );
};
export default ProfileInfo;
