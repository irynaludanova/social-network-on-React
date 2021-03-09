import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const MyPosts = React.memo((props) => {
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
});
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"newPostText"}
        placeholder={"Enter your post"}
        validate={[required, maxLength10]}
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
