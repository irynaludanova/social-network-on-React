import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostText = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div>
        <div className={classes.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"newPostText"}
        placeholder={"Enter your post"}
      />

      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);
export default MyPosts;
