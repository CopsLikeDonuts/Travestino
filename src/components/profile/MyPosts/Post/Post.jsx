import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
          <div className={classes.item}>
            <img src='avatar.jpg' alt='avatar'></img>
            {props.message}
            <div>
              {props.likes} likes
              <span>Like</span>
            </div>
          </div>
          
    )
}

export default Post;