import React from "react";
import { Field, reduxForm } from "redux-form";
import {  maxLengthCreator, required } from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 =  maxLengthCreator(10);

const MyPosts = React.((props) => {
  console.log("render");

  let postsElements = props.posts.map((p) => <Post message={p.message} likeCount={p.likeCount} />);

  
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
});
 
const AddNewPostForm = (props) => {
  return (
    <form className={s.newPost} onSubmit= {props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder="Enter your post..." validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
  </form>
  )
}

const MyPostFormRedux = reduxForm({form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;
