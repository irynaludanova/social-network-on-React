import React from "react";
import Avatar from "../../Avatar/Avatar";
import Preloader from "../../common/Preloader/Preloader";
import Description from "../../Descriptions/Description";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.userInfo}>
      <Avatar profile={props.profile || userPhoto} />
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <Description profile={props.profile} />
    </div>
  );
};
export default ProfileInfo;
