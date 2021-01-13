import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_IoZ1zN3m5kSH-vs3pd4otJhincC9ZuvsQ&usqp=CAU' alt='profile-pic'></img>
        </div>
        <div className={s.descriptionBlock}>
            ava + desc
        </div>
        
      </div>
    )
}

export default ProfileInfo;