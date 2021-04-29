import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={s.coment__body}>
      <div className={s.coment__name}>{props.name}</div>
      <div className={s.coment__text}>{props.message}</div>
      <div></div>
    </div>
  );
};
export default Post;
