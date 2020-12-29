import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
      <div className={classes.content}>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_IoZ1zN3m5kSH-vs3pd4otJhincC9ZuvsQ&usqp=CAU' alt='profile-pic'></img>
        </div>
        <div>
          ava + desc
      </div>
        <div>
          my posts
        <div>
            new post
        </div>
          <div className='posts'>
            <div className={classes.item}>
              post 1
          </div>
            <div className={classes.item}>
              post 2
          </div>

          </div>
        </div>
      </div>
    )
}

export default Profile;