import React from "react";
import classes from "./MyPosts.module.css";
import Like from "./Post/Like/Like";
import Post from "./Post/Post";
const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It`s my first post", likesCount: 11 },
  ];

  let postsElement = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        <div classes={classes.posts}>{postsElement}</div>
      </div>
    </div>
  );
};
export default MyPosts;
