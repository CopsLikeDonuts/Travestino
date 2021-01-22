import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost} from '../../redux/state';

const Profile = (props) => {

    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={addPost}/>
      </div>
    )
}

export default Profile;