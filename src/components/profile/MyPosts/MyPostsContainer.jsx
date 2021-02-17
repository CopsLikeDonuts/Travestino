import React from 'react';
import MyPosts from './MyPosts';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  }

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

    return (
        <MyPosts udapteNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;