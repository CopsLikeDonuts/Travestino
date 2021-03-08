import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

    return (
      <div>
        <div>
          <img src='background1.jpg' alt='profile-background'></img>
        </div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt='profile-ava' className={s.avatar}></img>
          <div>
            <p>{props.profile.fullName}</p>
            <p><b>My contacts</b></p>
            <p>Facebook: {props.profile.contacts.facebook}</p>
            <p>VK: {props.profile.contacts.vk}</p>
            <p>Insta: {props.profile.contacts.instagram}</p>
            <p>GitHub: {props.profile.contacts.github}</p>
            <p>Job search status: {props.profile.lookingForAJobDescription}</p>
          </div>
        </div>
        
      </div>
    )
}

export default ProfileInfo;