import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        
        <div>
          <img src='background1.jpg' alt='profile-background'></img>
        </div>
        <div className={s.descriptionBlock}>
            ava + desc
        </div>
        
      </div>
    )
}

export default ProfileInfo;