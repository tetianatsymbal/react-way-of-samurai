import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => <Post message={p.message} likeCount={p.likeCount} />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)


  }
  
  let AddNewPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostFormRedux onSubmit={AddNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

const MyPostForm = (props) => {
  return (
    <form className={s.newPost} onSubmit= {props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" placeholder="Enter your post..."/>
        {/* <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/> */}
      </div>
      <div>
        <button>Add post</button>
      </div>
  </form>
  )
}

const MyPostFormRedux = reduxForm({form: AddNewPostForm})(MyPostForm);

export default MyPosts;
