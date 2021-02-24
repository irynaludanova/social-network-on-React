import React from "react";
import classes from "./MyPosts.module.css";
import Like from "./Post/Like/Like";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <div classes={classes.posts}>
          <Post message="Hi, how are you?" />
          <Like message="WOW" />
          <Post message="It`s my first post" />
          <Like message="Like" />
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
