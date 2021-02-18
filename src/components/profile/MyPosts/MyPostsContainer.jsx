import React from 'react';
import MyPosts from './MyPosts';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
          {
          (store) =>{
            let state = store.getState();
            let onPostChange = (text) => {
              let action = updateNewPostTextActionCreator(text)
              store.dispatch(action);
            }
          
            let addPost = () => {
              store.dispatch(addPostActionCreator())
            }
            return <MyPosts udapteNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>}
                 }
        </StoreContext.Consumer>
        
    )
}

export default MyPostsContainer;