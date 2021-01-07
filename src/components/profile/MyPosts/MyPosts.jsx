import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
          my posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
          <div className={classes.item}>
            <Post message='Hi, how are you?' likes='15'/>
            <Post message="It's my first post" likes='20'/>
          </div>
        </div>
    )
}

export default MyPosts;