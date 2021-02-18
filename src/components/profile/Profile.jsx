import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
  debugger;
    return (
      <div>
        <ProfileInfo store={store}/>
        <MyPostsContainer store={store}/>
      </div>
    )
}

export default Profile;