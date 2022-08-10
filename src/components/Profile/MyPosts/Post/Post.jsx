import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return <div className={s.item}>
    <div className={s.info}>
      <img src='https://i.pinimg.com/originals/d2/27/67/d22767e3ecd58f14c839092e1dfe3852.jpg'/>
      <div className={s.postMessage}>{props.message}</div>
    </div>
    <div className={s.likes}>
        <span>{props.likeCount}</span>
        <span> LIKE </span>
    </div>
  </div>
}

export default Post;