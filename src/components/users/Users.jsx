import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { followUser } from '../../api/api';
import styles from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
        let pages = [];
        for (let i = 1; i <= pagesCount; i++ ){
            pages.push(i);
        }
        
    return (
        <div>
            <div className={styles.pages}>
                {pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage }
                                 onClick={() => { props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
                 {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img className={styles.usersPhoto} 
                                     src={u.photos.small != null ? u.photos.small: './userAvatar.png'} alt='userAvatar'></img>
                                </NavLink>
                            </div>
                            <div>
                                { u.followed 
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "90440e03-084f-488e-a3b5-5eca0a570644"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                    
                                
                                }}>Unfollow</button>
                                : <button onClick={() => followUser(u.id, props.follow(u.id))}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>)
                }
        </div>
    )
}

export default Users;