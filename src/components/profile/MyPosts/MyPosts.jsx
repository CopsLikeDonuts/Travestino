import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [{id: 1, post: 'Hi, how are you?', likes: 15}, 
                   {id: 2, post: "It's my first post", likes: 15}]
  
  let postsElements = posts.map(p => <Post message={p.post} likes={p.likes}/>);

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
            {postsElements}
          </div>
        </div>
    )
}

export default MyPosts;