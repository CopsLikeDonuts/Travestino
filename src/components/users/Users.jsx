import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1,
             followed: false, 
             fullName: 'Dmitriy',
             photoUrl: './userAvatar.png', 
             status: 'I am a boss', 
             location: {
                city: 'Minsk',
                country: 'Belarus'
                } 
            },
            {id: 2,
             followed: true, 
             fullName: 'Sasha',
             photoUrl: './userAvatar.png',  
             status: 'I love porgramming', 
             location: {
                city: 'Kyiv',
                country: 'Ukraine'
                   } 
               },
            {id: 3,
             followed: true, 
             fullName: 'Petro',
             photoUrl: './userAvatar.png',  
             status: 'Status', 
             location: {
                city: 'Odessa',
                country: 'Ukraine'
                } 
               },
            {id: 4,
             followed: false, 
             fullName: 'John',
             photoUrl: './userAvatar.png',  
             status: 'Want to meet new friends', 
             location: {
                city: 'New-York',
                country: 'USA'
                   } 
               },
        ]);
    }

    
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={u.photoUrl} alt='userAvatar'></img>
                    </div>
                    <div>
                        { u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;