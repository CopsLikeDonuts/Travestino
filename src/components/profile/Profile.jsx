import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className={classes.content}>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_IoZ1zN3m5kSH-vs3pd4otJhincC9ZuvsQ&usqp=CAU' alt='profile-pic'></img>
        </div>
        <div>
            ava + desc
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;