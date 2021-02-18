import React from 'react';
import MyPosts from './MyPosts';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      updateNewPostText: () => {
          dispatch(addPostActionCreator());
      },
      addPost: (text) => {
          let action = updateNewPostTextActionCreator(text);
          dispatch(action);
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

