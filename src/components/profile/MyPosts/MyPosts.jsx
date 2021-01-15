import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [{id: 1, post: 'Hi, how are you?', likes: 15}, 
                   {id: 2, post: "It's my first post", likes: 15}]

    return (
        <div className={classes.postsBlock}>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>  
            
        </div>
          <div className={classes.posts}>
            <Post message={postsData[0].post} likes={postsData[0].likes}/>
            <Post message={postsData[0].post} likes={postsData[0].likes}/>
          </div>
        </div>
    )
}

export default MyPosts;