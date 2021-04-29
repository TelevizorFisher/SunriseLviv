import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  //var el = window.location.pathname;
  var hash = window.location.hash.substr(1);
  var id = parseInt(hash.match(/\d+/));
  var comments = props.posts.filter((e) => e.productId === id);
  let postsElements = comments.map((p) => (
    <Post name={p.name} message={p.message} />
  ));

  let newPostElementN = React.createRef();
  let newPostElementT = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElementT.current.value;
    let productId = id;
    props.updateNewPostText(text, productId);
  };

  let onNameChange = () => {
    let name = newPostElementN.current.value;
    props.updateNewPostName(name);
  };

  return (
    <div className={s.coment_body}>
      <div className={s.coment_form}>
        <form className="decor">
          <div className={s.form_left_decoration}></div>
          <div className={s.form_right_decoration}></div>
          <div className={s.circle}></div>
          <div className={s.form_inner}>
            <h3>Залишіть Ваш відгук!</h3>
            <input
              type="text"
              placeholder="Ім'я"
              onChange={onNameChange}
              ref={newPostElementN}
              value={props.newPostName}
            />
            <textarea
              placeholder="Повідомлення..."
              rows="3"
              onChange={onPostChange}
              ref={newPostElementT}
              value={props.newPostText}
            />
            <input
              value="Надіслати"
              className={s.coment_button}
              onClick={onAddPost}
            />
          </div>
        </form>
        <div className={s.coment_body}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
