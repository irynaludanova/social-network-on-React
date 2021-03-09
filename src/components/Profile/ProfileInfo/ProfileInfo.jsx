import React from "react";
import Avatar from "../../Avatar/Avatar";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.userInfo}>
      <Avatar profile={profile || userPhoto} />
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};
export default ProfileInfo;
