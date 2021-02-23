import React from "react";
import Avatar from "./Avatar";
import Description from "./Description";
import Posts from "./Posts";

const Profile = () => {
  return (
    <div className="content">
      <div className="userInfo">
        <Avatar />
        <Description />
      </div>
      <div className="userActivity">
        {" "}
        <Posts />
      </div>
    </div>
  );
};
export default Profile;
