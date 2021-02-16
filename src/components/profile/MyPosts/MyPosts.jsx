import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import addPostActionCreator from '../../../redux/state';
import updateNewPostTextActionCreator from '../../../redux/state';


const MyPosts = (props) => {
  
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let postsElements = props.posts.map(p => <Post message={p.post} likes={p.likes}/>);

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
            <button onClick={addPost}>Add post</button>
          </div>  
            
        </div>
          <div className={classes.posts}>
            {postsElements}
          </div>
        </div>
    )
}

export default MyPosts;