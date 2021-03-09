import React from "react";
import Like from "./Like/Like";
import classes from "./Post.module.css";
const Post = ({ message }) => {
  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpLVeceq95v3XOJarckAU1aHea__LOj3FTw&usqp=CAU"
        alt={"like"}
      ></img>
      {message}
      <Like />
    </div>
  );
};
export default Post;
