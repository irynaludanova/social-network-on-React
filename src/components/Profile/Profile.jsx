import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, isOwner, status, updateStatus, savePhoto }) => {
  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        savePhoto={savePhoto}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />

      <MyPostsContainer />
    </div>
  );
};
export default Profile;
