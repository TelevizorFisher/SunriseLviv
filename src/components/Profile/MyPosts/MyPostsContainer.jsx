import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  updateNewPostNameActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {

  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
    newPostName: state.profile.newPostName,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text, productId) => {

      let action = updateNewPostTextActionCreator(text, productId);
      dispatch(action);
    },
    updateNewPostName: (name) => {
      let action = updateNewPostNameActionCreator(name);
      dispatch(action);
    },

  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
