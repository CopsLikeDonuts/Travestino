import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log(props);
  let newPostElement = React.createRef();
  let postsElements = props.posts.map(p => <Post post={p.post} likes={p.likes}/>);

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let onAddPost = () => {
    props.addPost();
  }

    return (
        <div className={classes.postsBlock}>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea
                onChange={onPostChange} 
                ref={newPostElement} 
                value={props.newPostText}
                placeholder='add post'/>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>  
            
        </div>
          <div className={classes.posts}>
            {postsElements}
          </div>
        </div>
    )
}

export default MyPosts;